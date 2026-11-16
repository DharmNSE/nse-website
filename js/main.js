// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}
// Footer year
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

// Contact form: sends via Formspree once configured; otherwise opens the visitor's email app.
const form = document.querySelector('#enquiry-form');
if (form) {
  const status = document.querySelector('#form-status');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    if (data.get('_gotcha')) return; // spam trap
    const configured = !form.action.includes('YOUR_FORM_ID');
    if (!configured) {
      const body = `Name: ${data.get('name')}\nOrganisation: ${data.get('organisation') || '-'}\nSector: ${data.get('sector') || '-'}\n\n${data.get('message')}`;
      window.location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent('Website enquiry')}&body=${encodeURIComponent(body)}`;
      return;
    }
    status.className = 'form-status';
    try {
      const res = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error();
      form.reset();
      status.textContent = 'Thank you — your enquiry has been sent. We will respond within one working day.';
      status.className = 'form-status ok';
    } catch {
      status.textContent = `Sorry, something went wrong. Please email us at ${form.dataset.email}.`;
      status.className = 'form-status err';
    }
  });
}
