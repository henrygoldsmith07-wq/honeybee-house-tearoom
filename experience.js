'use strict';
window.SiteUX={
 london(){return new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/London'}));},
 iso(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');},
 pretty(iso){return new Date(iso+'T12:00:00').toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'});},
 async copy(text){try{await navigator.clipboard.writeText(text);return true;}catch{const field=document.createElement('textarea');field.className='copy-buffer';field.value=text;field.setAttribute('aria-label','Request text to copy');document.body.append(field);field.select();let ok=false;try{ok=document.execCommand('copy');}catch{}field.remove();return ok;}}
};
(function(){
const date=document.querySelector('#b-date'),time=document.querySelector('#b-time'),people=document.querySelector('#b-people'),type=document.querySelector('#b-type');
if(date){
 const holder=document.querySelector('#quick-dates'),now=SiteUX.london();let found=0;
 for(let n=0;n<14&&found<3;n++){const candidate=new Date(now);candidate.setDate(candidate.getDate()+n);if(candidate.getDay()<3||candidate.getDay()>6||(n===0&&now.getHours()*60+now.getMinutes()>=975))continue;found++;const button=document.createElement('button');button.type='button';button.className='quick-date';button.dataset.date=SiteUX.iso(candidate);button.textContent=candidate.toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'});button.setAttribute('aria-pressed','false');button.addEventListener('click',()=>{date.value=button.dataset.date;date.dispatchEvent(new Event('input',{bubbles:true}));date.dispatchEvent(new Event('change',{bubbles:true}));});holder.append(button);}
 function summary(){const now=SiteUX.london();document.querySelectorAll('[data-date]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.date===date.value)));for(const option of time.options){if(!option.value)continue;const minute=Number(option.value.split(':')[0])*60+Number(option.value.split(':')[1]);option.disabled=date.value===SiteUX.iso(now)&&minute<=now.getHours()*60+now.getMinutes();}if(time.selectedOptions[0]?.disabled)time.value='';const parts=[];if(date.value)parts.push(SiteUX.pretty(date.value));if(time.value)parts.push(time.value);if(people.value)parts.push(people.value==='1'?'1 person':people.value+' people');if(type.value)parts.push(type.value);document.querySelector('#booking-summary').textContent=date.value?parts.join(' · '):'Choose your date, time and party size to prepare a request.';}
 [date,time,people,type].forEach(el=>{el.addEventListener('input',summary);el.addEventListener('change',summary);});summary();setInterval(summary,60000);
}
})();

