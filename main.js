// ---------- BRAND CONFIG ----------
// Edit these values to update the brand name, contact info, etc. site-wide.
const BRAND = {
  name: "AdLab",
  whatsapp: "2349015262126",
  email: "hello@adlab.com.ng"
};
const WA_MESSAGE = encodeURIComponent("Hi, I'd like to discuss a project for my business. I'm interested in your website, branding or digital marketing services.");
const waLink = `https://wa.me/${BRAND.whatsapp}?text=${WA_MESSAGE}`;
document.querySelectorAll('[data-wa-link]').forEach(el => { el.href = waLink; });

// ---------- MOBILE DRAWER ----------
const drawer = document.getElementById('drawer');
const navtoggle = document.getElementById('navtoggle');
const drawerClose = document.getElementById('drawerClose');
if (navtoggle) navtoggle.addEventListener('click', () => drawer.classList.add('open'));
if (drawerClose) drawerClose.addEventListener('click', () => drawer.classList.remove('open'));
if (drawer) drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));

// ---------- SCROLL-SPY (home page only: highlights current section in nav) ----------
const spySectionIds = ['showcase','work','services','process','why','contact'];
const spySections = spySectionIds.map(id => document.getElementById(id)).filter(Boolean);
if (spySections.length) {
  const allNavLinks = [...document.querySelectorAll('#desktopLinks a'), ...document.querySelectorAll('#drawerLinks a')];
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        allNavLinks.forEach(a => a.classList.toggle('active', a.dataset.sec === id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  spySections.forEach(s => spy.observe(s));
}

// ---------- YEAR STAMP ----------
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
