// Mobile nav
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Nav shadow on scroll
const nav = document.getElementById('nav');
if (nav) {
  const onScroll = () => {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 1px 0 rgba(184,152,90,0.18)'
      : 'none';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Before/After slider
const initSlider = (wrapperId) => {
  const wrap = document.getElementById(wrapperId);
  if (!wrap) return;
  const clip = wrap.querySelector('.ba-clip');
  const handle = wrap.querySelector('.ba-handle');
  let dragging = false;

  const setPos = (clientX) => {
    const r = wrap.getBoundingClientRect();
    let pct = Math.max(0.04, Math.min(0.96, (clientX - r.left) / r.width));
    clip.style.width = `${pct * 100}%`;
    handle.style.left = `${pct * 100}%`;
  };

  wrap.addEventListener('mousedown', (e) => { dragging = true; setPos(e.clientX); });
  document.addEventListener('mousemove', (e) => { if (dragging) setPos(e.clientX); });
  document.addEventListener('mouseup', () => { dragging = false; });
  wrap.addEventListener('touchstart', (e) => { dragging = true; setPos(e.touches[0].clientX); }, { passive: true });
  document.addEventListener('touchmove', (e) => { if (dragging) setPos(e.touches[0].clientX); }, { passive: true });
  document.addEventListener('touchend', () => { dragging = false; });
};

initSlider('baSlider');

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});

// Simple form submission feedback
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = 'Skickat ✓';
      btn.style.background = '#2e7d32';
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = '';
        form.reset();
      }, 3000);
    }
  });
});
