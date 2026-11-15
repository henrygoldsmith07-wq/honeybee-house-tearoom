'use strict';
window.SiteUX={
 london(){return new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/London'}));},
 iso(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');},
 pretty(iso){return new Date(iso+'T12:00:00').toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'});},
 async copy(text){try{await navigator.clipboard.writeText(text);return true;}catch{const field=document.createElement('textarea');field.className='copy-buffer';field.value=text;field.setAttribute('aria-label','Request text to copy');document.body.append(field);field.select();let ok=false;try{ok=document.execCommand('copy');}catch{}field.remove();return ok;}}
};
(function(){
const cards=[...document.querySelectorAll('[data-rack]')];
const names=['Birthday cards','Thank you notes','Sympathy and thinking-of-you cards','Welsh-language cards enquiry','New baby & christening cards'];
const subtitles=['Someone’s day, remembered','A little gratitude goes a long way','For the words that matter','Ask about cards in Welsh','A small welcome to the world'];
let selected=0;
function choose(index,focus=false){selected=(index+cards.length)%cards.length;cards.forEach((card,i)=>card.setAttribute('aria-pressed',String(i===selected)));document.querySelector('#rack-title').textContent=names[selected];document.querySelector('#rack-subtitle').textContent=subtitles[selected];document.querySelector('#rack-position').textContent=(selected+1)+' / '+cards.length;const add=document.querySelector('#rack-add');add.dataset.add=names[selected];add.textContent='Add this occasion to my shortlist';if(focus)cards[selected].focus();}
cards.forEach((card,i)=>{card.addEventListener('click',()=>choose(i));card.addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;e.preventDefault();choose(e.key==='Home'?0:e.key==='End'?cards.length-1:selected+(e.key==='ArrowRight'?1:-1),true);});});
document.querySelectorAll('[data-rack-step]').forEach(b=>b.addEventListener('click',()=>choose(selected+Number(b.dataset.rackStep))));
const service=document.querySelector('#service');
function serviceState(value){document.querySelectorAll('[data-hero-service]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.heroService===value)));document.querySelectorAll('.services li').forEach(li=>li.classList.toggle('service-selected',li.querySelector('[data-service]')?.dataset.service===value));const description=document.querySelector('#service-copy');if(description)description.textContent=value+' selected for your visit note. The shop confirms options and price.';}
document.querySelectorAll('[data-hero-service]').forEach(b=>b.addEventListener('click',()=>{if(!service)return;service.value=b.dataset.heroService;service.dispatchEvent(new Event('input',{bubbles:true}));serviceState(service.value);}));
document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>{if(service){service.value=a.dataset.service;service.dispatchEvent(new Event('input',{bubbles:true}));serviceState(service.value);}}));
if(service)service.addEventListener('change',()=>serviceState(service.value));
const date=document.querySelector('#b-date'),time=document.querySelector('#b-time'),people=document.querySelector('#b-people'),type=document.querySelector('#b-type');
if(date){
 const holder=document.querySelector('#quick-dates'),now=SiteUX.london();let found=0;
 for(let n=0;n<14&&found<3;n++){const candidate=new Date(now);candidate.setDate(candidate.getDate()+n);if(candidate.getDay()<3||candidate.getDay()>6||(n===0&&now.getHours()*60+now.getMinutes()>=975))continue;found++;const button=document.createElement('button');button.type='button';button.className='quick-date';button.dataset.date=SiteUX.iso(candidate);button.textContent=candidate.toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'});button.setAttribute('aria-pressed','false');button.addEventListener('click',()=>{date.value=button.dataset.date;date.dispatchEvent(new Event('input',{bubbles:true}));date.dispatchEvent(new Event('change',{bubbles:true}));});holder.append(button);}
 function summary(){const now=SiteUX.london();document.querySelectorAll('[data-date]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.date===date.value)));for(const option of time.options){if(!option.value)continue;const minute=Number(option.value.split(':')[0])*60+Number(option.value.split(':')[1]);option.disabled=date.value===SiteUX.iso(now)&&minute<=now.getHours()*60+now.getMinutes();}if(time.selectedOptions[0]?.disabled)time.value='';const parts=[];if(date.value)parts.push(SiteUX.pretty(date.value));if(time.value)parts.push(time.value);if(people.value)parts.push(people.value==='1'?'1 person':people.value+' people');if(type.value)parts.push(type.value);document.querySelector('#booking-summary').textContent=date.value?parts.join(' · '):'Choose your date, time and party size to prepare a request.';}
 [date,time,people,type].forEach(el=>{el.addEventListener('input',summary);el.addEventListener('change',summary);});summary();
}
const status=document.querySelector('#visit-status');if(status){
 const best=document.body.classList.contains('studio'),hours=best?{0:[600,960],1:[540,1080],2:[540,1080],3:[540,1080],4:[540,1080],5:[540,1080],6:[540,1080]}:{1:[540,1020],2:[540,1020],3:[540,1020],4:[540,1020],5:[540,1020],6:[540,780]};
 const fmt=m=>{const h=Math.floor(m/60);return(h%12||12)+(m%60?':'+String(m%60).padStart(2,'0'):'')+(h>=12?'pm':'am');};
 function render(){const n=SiteUX.london(),d=n.getDay(),m=n.getHours()*60+n.getMinutes(),today=hours[d];if(today&&m>=today[0]&&m<today[1])status.textContent='Listed open until '+fmt(today[1]);else if(today&&m<today[0])status.textContent='Listed opening today: '+fmt(today[0]);else{for(let i=1;i<8;i++){const next=(d+i)%7;if(hours[next]){status.textContent='Next listed opening: '+(i===1?'tomorrow':new Date(2026,10,15+next).toLocaleDateString('en-GB',{weekday:'long'}))+' at '+fmt(hours[next][0]);break;}}}}
 render();setInterval(render,60000);
}
})();

/* final polish: reveal, parallax, keyboard-safe */
(function(){
 var root=document.documentElement;root.classList.add('js-reveal');
 var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
 var reveal=[].slice.call(document.querySelectorAll('[data-reveal]'));
 if(reduce||!('IntersectionObserver' in window)){reveal.forEach(function(el){el.classList.add('is-in');});}
 else{var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -8% 0px'});reveal.forEach(function(el){io.observe(el);});}
 var hero=document.querySelector('.direction-hero'),vis=document.querySelector('.direction-hero .direction-visual');
 if(hero&&vis&&!reduce&&matchMedia('(pointer:fine)').matches){
  vis.classList.add('hero-parallax');var raf=null;
  hero.addEventListener('pointermove',function(e){if(raf)return;raf=requestAnimationFrame(function(){var r=hero.getBoundingClientRect();var x=((e.clientX-r.left)/r.width-.5)*2,y=((e.clientY-r.top)/r.height-.5)*2;vis.style.setProperty('--px',(x*9).toFixed(2));vis.style.setProperty('--py',(y*7).toFixed(2));raf=null;});});
  hero.addEventListener('pointerleave',function(){vis.style.setProperty('--px','0');vis.style.setProperty('--py','0');});
 }
})();
