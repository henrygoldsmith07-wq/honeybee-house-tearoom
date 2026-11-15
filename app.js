
(function () {
  'use strict';

  var SHOP = {
    name: 'Honeybee House Tearoom',
    email: 'hbhtearoom@gmail.com',
    phone: '029 2075 5380',
    /* 0 = Sunday. Only Wednesday(3) to Saturday(6) are open. */
    hours: { 0: null, 1: null, 2: null, 3: [555, 975], 4: [555, 975], 5: [555, 975], 6: [555, 975] }
  };
  var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function fmt(mins) {
    var h = Math.floor(mins / 60), m = mins % 60, ampm = h >= 12 ? 'pm' : 'am', h12 = h % 12 || 12;
    return h12 + (m ? ':' + (m < 10 ? '0' + m : m) : '') + ampm;
  }

  function renderStatus() {
    var el = document.getElementById('status'), txt = document.getElementById('status-text');
    if (!el || !txt) return;
    var now = new Date(new Date().toLocaleString('en-US', {timeZone:'Europe/London'})), day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
    var today = SHOP.hours[day], msg = '', cls = 'is-closed';
    if (today && mins >= today[0] && mins < today[1]) {
      cls = 'is-open';
      msg = 'Open now — listed closing time ' + fmt(today[1]);
    } else if (today && mins < today[0]) {
      msg = 'Closed — opens today at ' + fmt(today[0]);
    } else {
      for (var i = 1; i <= 7; i++) {
        var d = (day + i) % 7;
        if (SHOP.hours[d]) {
          msg = 'Closed — opens ' + (i === 1 ? 'tomorrow' : DAYS[d]) + ' at ' + fmt(SHOP.hours[d][0]);
          break;
        }
      }
      if (!msg) msg = 'Closed — ring to check';
    }
    el.className = 'status ' + cls;
    txt.textContent = msg;
  }

  function markToday() {
    var rows = document.querySelectorAll('#hours-table tr[data-day]');
    var d = new Date().getDay();
    for (var i = 0; i < rows.length; i++) {
      if (Number(rows[i].getAttribute('data-day')) === d) rows[i].classList.add('today');
    }
  }

  /* ---------- date limits ---------- */
  function isoDate(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function setupDate() {
    var input = document.getElementById('b-date');
    if (!input) return;
    var today = new Date();
    input.min = isoDate(today);
    var max = new Date(); max.setDate(max.getDate() + 120);
    input.max = isoDate(max);
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }

  function prettyDate(iso) {
    var parts = iso.split('-');
    var d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    return d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  }

  function makeRef() {
    var d = new Date();
    var stamp = String(d.getFullYear()).slice(2) + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
    return 'HB-' + stamp + '-' + Math.random().toString(36).slice(2, 5).toUpperCase();
  }

  function onSubmit(e) {
    e.preventDefault();
    var alertBox = document.getElementById('book-alert');
    alertBox.hidden = true;

    if (document.getElementById('b-hp').value) return;

    var date = document.getElementById('b-date').value;
    var time = document.getElementById('b-time').value;
    var people = document.getElementById('b-people').value;
    var type = document.getElementById('b-type').value;
    var name = document.getElementById('b-name').value.trim();
    var phone = document.getElementById('b-phone').value.trim();
    var notes = document.getElementById('b-notes').value.trim();

    function fail(msg) { alertBox.textContent = msg; alertBox.hidden = false; alertBox.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }

    if (!date) return fail('Pick a date for your table.');
    if (!time) return fail('Pick a time.');
    if (!people) return fail('Tell us how many of you there are.');
    if (name.length < 2) return fail('Please give a name for the booking.');
    if (!/^[+()0-9 \-]{7,25}$/.test(phone) || phone.replace(/\D/g, '').length < 7) return fail('Please add a phone number so the tearoom can confirm.');

    var chosen = new Date(date + 'T12:00:00');
    var today = new Date(); today.setHours(0, 0, 0, 0);
    if (chosen < today) return fail('That date has already passed. Pick today or a later day.');

    var dow = chosen.getDay();
    if (!SHOP.hours[dow]) {
      return fail('The tearoom is closed on ' + DAYS[dow] + 's. Open Wednesday to Saturday — pick another day.');
    }

    var selectedMinutes = Number(time.split(':')[0])*60+Number(time.split(':')[1]);
    var londonNow = new Date(new Date().toLocaleString('en-US', {timeZone:'Europe/London'}));
    if (selectedMinutes < SHOP.hours[dow][0] || selectedMinutes >= SHOP.hours[dow][1]) return fail('Choose a time during the listed opening hours.');
    if (date === isoDate(londonNow) && selectedMinutes <= londonNow.getHours()*60+londonNow.getMinutes()) return fail('That time has passed. Choose a later time.');
    if (date > document.getElementById('b-date').max) return fail('Choose a date within the next 120 days.');
    var ref = makeRef();
    var body = 'Hello Honeybee House,\n\nI would like to book a table.\n\n' +
      'Date: ' + prettyDate(date) + '\n' +
      'Time: ' + time + '\n' +
      'People: ' + people + '\n' +
      'Visit: ' + type + '\n' +
      'Name: ' + name + '\n' +
      'Phone: ' + phone + '\n' +
      (notes ? 'Notes: ' + notes + '\n' : '') +
      '\nReference: ' + ref + '\n\nPlease confirm the table and let me know if you need anything else from me.\n\nThank you.';
    var mailto = 'mailto:' + SHOP.email + '?subject=' + encodeURIComponent('Table booking ' + ref + ' — ' + prettyDate(date)) + '&body=' + encodeURIComponent(body);

    var result = document.getElementById('book-result');
    result.innerHTML =
      '<div class="confirm"><h3>Request ready — ' + esc(ref) + '</h3>' +
      '<p style="font-size:.92rem;margin:.2rem 0 0">The table is not held yet. Send it over and the tearoom will confirm.</p>' +
      '<dl>' +
        '<dt>Date</dt><dd>' + esc(prettyDate(date)) + '</dd>' +
        '<dt>Time</dt><dd>' + esc(time) + '</dd>' +
        '<dt>People</dt><dd>' + esc(people) + '</dd>' +
        '<dt>Visit</dt><dd>' + esc(type) + '</dd>' +
        '<dt>Reference</dt><dd><span class="ref">' + esc(ref) + '</span></dd>' +
      '</dl>' +
      '<a class="btn btn-honey btn-block" href="' + esc(mailto) + '">Open the email to Honeybee House</a>' +
      '<button class="btn btn-outline btn-block" type="button" id="copy-ref" style="margin-top:.5rem">Copy full request</button>' +
      '<p class="hint" style="margin-top:.7rem">No email app? Copy the full request and call ' + SHOP.phone + ' to read out your request.</p></div>';

    var copyBtn = document.getElementById('copy-ref');
    if (copyBtn) copyBtn.addEventListener('click', function () {
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(body).then(function () { copyBtn.textContent = 'Copied'; }, function () {});
    });
    var full=document.createElement('pre');full.textContent=body;full.style.cssText='white-space:pre-wrap;font:inherit;font-size:.85rem;overflow-wrap:anywhere';result.appendChild(full);
    result.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  var form = document.getElementById('book-form');
  if (form) form.addEventListener('submit', onSubmit);

  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());

  setupDate(); renderStatus(); markToday();
  setInterval(renderStatus, 60000);
})();
