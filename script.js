/* ═══════════════════════════════════════
   SELECTIONS HR — SCRIPTS
═══════════════════════════════════════ */

/* ── Brand loader: self-drawing logo, shown once per session ── */
(function () {
  const el = document.getElementById('site-loader');
  if (!el) return;
  // Already seen this session → don't show it again
  if (document.documentElement.classList.contains('loader-done')) { el.remove(); return; }

  el.innerHTML = `
    <div class="stage">
      <svg class="logo" viewBox="0 0 1920 426" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path class="draw" style="--i:0" pathLength="1" d="M129.8,259.8c-8.5-.2-16.7-1.8-24.7-4.6-8-2.9-15.1-6.8-21-11.8-6-4.9-10.3-10.6-12.8-16.9l18.7-8c1.6,4,4.7,7.7,9.1,11.1,4.5,3.3,9.7,6,15.5,8,5.8,2,11.5,2.9,17.2,2.9s12.2-1,17.6-3.1c5.5-2.1,9.9-5,13.3-8.8,3.5-3.9,5.3-8.5,5.3-13.8s-1.9-10.1-5.6-13.3c-3.7-3.3-8.4-5.9-14.1-7.7-5.7-2-11.5-3.8-17.5-5.6-10.9-3-20.6-6.3-28.9-9.9-8.4-3.6-14.9-8.2-19.6-13.8-4.6-5.7-7-12.9-7-21.8s2.6-17.5,7.9-24.3c5.4-6.9,12.3-12.2,20.9-15.9,8.7-3.8,17.9-5.7,27.7-5.7s24,2.7,34.3,8.2c10.4,5.5,17.9,12.7,22.6,21.8l-17.5,10.4c-1.9-4.2-4.8-7.9-8.8-11-4-3.1-8.6-5.5-13.8-7.3-5.1-1.8-10.2-2.7-15.5-2.8-6.6-.1-12.7.9-18.4,2.9-5.7,2-10.3,4.9-13.8,8.8-3.4,3.9-5.1,8.7-5.1,14.4s1.7,10,5.1,13c3.4,2.9,8,5.3,13.8,7.1,5.9,1.8,12.5,3.8,19.8,6.2,9.4,3,18.2,6.4,26.4,10.2,8.2,3.8,14.9,8.6,20,14.2,5.1,5.7,7.5,12.8,7.4,21.5,0,9.3-2.8,17.4-8.4,24.3-5.6,6.9-12.8,12.2-21.7,15.9-8.9,3.6-18.4,5.3-28.5,4.9Z"/>
        <path class="draw" style="--i:1" pathLength="1" d="M334.4,260.9c-14.2,0-27.2-3.7-39-11-11.7-7.3-21-17.1-28-29.4-6.9-12.4-10.4-26-10.4-41s2-21.9,6-31.7c4-9.9,9.5-18.6,16.6-26,7.1-7.5,15.4-13.4,24.7-17.6,9.4-4.2,19.4-6.3,30-6.3s22,2.3,31.6,6.8c9.7,4.5,18,10.9,24.9,19,7,8.1,12.3,17.7,15.8,28.6,3.6,10.9,4.2,11.8,4.2,24h-131.2c-.6,13.7,4.6,30,9.6,37.7,5.1,7.7,11.4,13.9,19.2,18.4,7.8,4.4,16.5,6.7,26,6.8,10.3,0,19.6-2.7,27.8-8,8.4-5.4,15.1-12.7,20.1-22.1l22,5.1c-6.2,13.7-15.5,25-28,33.7-12.5,8.7-26.4,13-41.9,13ZM279.3,170.3h110c-.7-9.6-3.7-18.4-8.8-26.3-5.1-8-11.6-14.4-19.6-19.2-8-4.8-16.9-7.3-26.4-7.3s-18.4,2.4-26.3,7.1c-7.9,4.6-14.4,11-19.5,19-5.1,7.9-8.1,16.8-9.3,26.6Z"/>
        <path class="draw" style="--i:2" pathLength="1" d="M489,256.9V95.7h21.7v161.2h-21.7Z"/>
        <path class="draw" style="--i:3" pathLength="1" d="M667.4,260.9c-14.2,0-27.2-3.7-39-11-11.6-7.3-21-17.1-28-29.4-6.9-12.4-10.4-26-10.4-41s2-21.9,6-31.7c4-9.9,9.5-18.6,16.5-26,7.1-7.5,15.4-13.4,24.7-17.6,9.4-4.2,19.4-6.3,30-6.3s22,2.3,31.6,6.8c9.7,4.5,18,10.9,24.9,19,7,8.1,12.3,17.7,15.8,28.6,3.6,10.9,5.7,11.8,5.7,24h-131.2c-.6,19.7,3.9,29.7,8.1,37.7,5.1,7.7,11.4,13.9,19.2,18.4,7.8,4.4,16.5,6.7,26,6.8,10.3,0,19.6-2.7,27.8-8,8.4-5.4,15.1-12.7,20.1-22.1l22,5.1c-6.2,13.7-15.5,25-28,33.7-12.5,8.7-26.4,13-41.9,13ZM612.3,170.3h110c-.7-9.6-3.7-18.4-8.8-26.3-5.1-8-11.6-14.4-19.6-19.2-8-4.8-16.9-7.3-26.4-7.3s-18.4,2.4-26.3,7.1c-7.9,4.6-14.4,11-19.5,19-5.1,7.9-8.1,16.8-9.3,26.6Z"/>
        <path class="draw" style="--i:4" pathLength="1" d="M932.1,218.1l19.3,10.5c-7,9.8-15.9,17.6-26.8,23.5-10.7,5.9-22.4,8.8-35,8.8s-27.2-3.7-39-11c-11.7-7.3-21-17.1-28-29.4-6.9-12.4-10.4-26-10.4-41s2-21.9,6-31.7c4-9.9,9.5-18.6,16.6-26,7.1-7.5,15.4-13.4,24.7-17.6,9.4-4.2,19.4-6.3,30-6.3s24.2,2.9,35,8.8c10.8,5.9,19.7,13.8,26.8,23.7l-19.3,10.4c-5.4-6.8-11.8-12-19.3-15.6-7.5-3.7-15.2-5.6-23-5.6s-19.9,2.8-28.3,8.4c-8.5,5.5-15.2,12.7-20.1,21.8-4.8,9.1-7.3,19-7.3,29.9s2.5,20.8,7.4,29.9c5.1,9.1,11.8,16.3,20.3,21.8,8.5,5.4,17.8,8,28,8s16.4-2,23.8-5.9c7.4-3.9,13.6-9,18.6-15.3Z"/>
        <path class="draw" style="--i:5" pathLength="1" d="M1111,144.5h-37l-.2,112.3h-21.7l.2-133v-28.2h21.7v27.2h37v21.7Z"/>
        <path class="draw" style="--i:6" pathLength="1" d="M1190,149.4h21.7v107.5h-21.7v-107.5Z"/>
        <path class="draw" style="--i:7" pathLength="1" d="M1368,260.9c-14.2,0-27.2-3.7-39-11-11.7-7.3-21-17.1-28-29.4-6.9-12.4-10.4-26-10.4-41s2-21.9,6-31.7c4-9.9,9.5-18.6,16.6-26,7.1-7.5,15.4-13.4,24.7-17.6,9.4-4.2,19.4-6.3,30-6.3s27.2,3.7,38.8,11c11.8,7.3,21.1,17.2,28,29.5,7,12.4,10.5,26.1,10.5,41.1s-2,21.8-6,31.6c-4,9.8-9.6,18.5-16.7,26-7,7.4-15.2,13.3-24.6,17.5-9.3,4.2-19.3,6.3-30,6.3ZM1368,239.2c10.5,0,20-2.7,28.3-8.2,8.5-5.6,15.1-12.9,20-22,4.9-9.1,7.4-18.9,7.4-29.5s-2.5-20.8-7.4-29.9c-5-9.2-11.7-16.5-20.1-22-8.4-5.5-17.7-8.2-28.1-8.2s-20,2.8-28.5,8.4c-8.4,5.5-15,12.7-20,21.8-4.8,9.1-7.3,19-7.3,29.9s2.5,21.2,7.6,30.3c5.1,9,11.8,16.1,20.3,21.5,8.5,5.3,17.7,7.9,27.8,7.9Z"/>
        <path class="draw" style="--i:8" pathLength="1" d="M1659,161.1v95.7h-21.7v-91.4c0-8.5-2.1-16.1-6.2-23-4.1-6.9-9.6-12.4-16.5-16.6-6.9-4.1-14.6-6.2-23-6.2s-16,2.1-23,6.2c-6.9,4.1-12.4,9.6-16.5,16.6-4.1,6.9-6.2,14.6-6.2,23h-21.7v-63.3h21.7v21.3c5.5-7.8,12.6-14.1,21.3-18.7,8.8-4.6,18.3-7,28.6-7s22.3,2.8,31.9,8.5c9.6,5.7,17.2,13.3,22.9,22.9,5.7,9.6,8.5,20.2,8.5,31.9Z"/>
        <path class="draw" style="--i:9" pathLength="1" d="M1790.4,259.8c-8.5-.2-16.7-1.8-24.7-4.6-8-2.9-15.1-6.8-21-11.8-6-4.9-10.3-10.6-12.8-16.9l18.7-8c1.6,4,4.7,7.7,9.1,11.1,4.5,3.3,9.7,6,15.5,8,5.8,2,11.5,2.9,17.2,2.9s12.2-1,17.6-3.1c5.5-2.1,9.9-5,13.3-8.8,3.5-3.9,5.3-8.5,5.3-13.8s-1.9-10.1-5.6-13.3c-3.7-3.3-8.4-5.9-14.1-7.7-5.7-2-11.5-3.8-17.5-5.6-10.9-3-20.6-6.3-28.9-9.9-8.4-3.6-14.9-8.2-19.6-13.8-4.6-5.7-7-12.9-7-21.8s2.6-17.5,7.9-24.3c5.4-6.9,12.3-12.2,20.9-15.9,8.7-3.8,17.9-5.7,27.7-5.7s24,2.7,34.3,8.2c10.4,5.5,17.9,12.7,22.6,21.8l-17.5,10.4c-1.9-4.2-4.8-7.9-8.8-11-4-3.1-8.6-5.5-13.8-7.3-5.1-1.8-10.2-2.7-15.5-2.8-6.6-.1-12.7.9-18.4,2.9-5.7,2-10.3,4.9-13.8,8.8-3.4,3.9-5.1,8.7-5.1,14.4s1.7,10,5.1,13c3.4,2.9,8,5.3,13.8,7.1,5.9,1.8,12.5,3.8,19.8,6.2,9.4,3,18.2,6.4,26.4,10.2s14.9,8.6,20,14.2c5.1,5.7,7.5,12.8,7.4,21.5,0,9.3-2.8,17.4-8.4,24.3-5.6,6.9-12.8,12.2-21.7,15.9-8.9,3.6-18.4,5.3-28.5,4.9Z"/>
        <path class="sq" d="M1189.8,95.7h21.7v19.5h-21.7v-19.5Z"/>
        <path class="sq" d="M1524.4,232.5h22v24.4h-22v-24.4Z"/>
        <path class="sub" d="M78.4,364.3v-42.6h1.3v20.6h27.1v-20.6h1.3v42.6h-1.3v-20.6h-27.1v20.6h-1.3Z"/>
        <path class="sub" d="M262.7,364.3v-42.6h12.5c2.4,0,4.5.5,6.3,1.5,1.8,1,3.3,2.4,4.3,4.2,1.1,1.8,1.6,3.9,1.6,6.4s-.5,4.5-1.6,6.3c-1,1.8-2.5,3.2-4.3,4.2-1.8,1-3.9,1.5-6.3,1.5h-11.8v-1.3h11.8c2.1,0,4-.4,5.7-1.3,1.6-.9,2.9-2.1,3.9-3.7.9-1.6,1.4-3.5,1.4-5.7s-.5-4.1-1.4-5.7c-.9-1.6-2.2-2.9-3.9-3.8-1.6-.9-3.5-1.4-5.7-1.4h-11.2v41.3h-1.3ZM279,344.9l10.5,19.4h-1.5l-10.5-19.4h1.5Z"/>
        <path class="sub" d="M620.6,332.4c-.2-2.9-1.3-5.3-3.4-7.2-2-1.9-4.7-2.8-8-2.8s-4.1.4-5.8,1.2c-1.7.8-3.1,2-4,3.4-1,1.4-1.5,3.1-1.5,5s.2,2.1.5,3c.4.9.9,1.8,1.6,2.5.8.7,1.7,1.4,2.8,2,1.1.6,2.5,1.1,4,1.6l4.8,1.5c1.8.6,3.4,1.2,4.8,1.9,1.3.7,2.5,1.5,3.3,2.4.9.9,1.5,1.9,2,2.9.4,1.1.6,2.3.6,3.6,0,2.2-.6,4.2-1.7,5.9-1.1,1.7-2.7,3.1-4.8,4.1-2,1-4.4,1.5-7.1,1.5s-4.9-.5-6.8-1.4c-1.9-.9-3.5-2.2-4.6-3.8-1.1-1.6-1.8-3.5-1.9-5.5h1.3c.1,1.8.7,3.4,1.7,4.8s2.4,2.5,4.1,3.3c1.7.8,3.8,1.2,6.1,1.2s4.6-.4,6.4-1.3c1.8-.9,3.3-2.1,4.3-3.6,1-1.5,1.5-3.3,1.5-5.3s-.3-2.9-1-4c-.7-1.2-1.7-2.2-3.1-3.1-1.4-.9-3.3-1.7-5.6-2.4l-4.8-1.5c-3.3-1.1-5.8-2.4-7.5-4.2-1.7-1.7-2.5-3.8-2.5-6.3s.5-4,1.6-5.6c1.1-1.7,2.6-3,4.5-3.9,1.9-1,4.1-1.4,6.5-1.4s4.6.5,6.4,1.5c1.8,1,3.3,2.3,4.4,4,1.1,1.7,1.7,3.7,1.8,5.8h-1.3Z"/>
        <path class="sub" d="M774.9,364.3v-42.6h22.7v1.3h-21.4v19.3h20.1v1.3h-20.1v19.3h22v1.3h-23.3Z"/>
        <path class="sub" d="M950.4,364.3v-42.6h12.5c2.4,0,4.5.5,6.3,1.5,1.8,1,3.3,2.4,4.3,4.2,1.1,1.8,1.6,3.9,1.6,6.4s-.5,4.5-1.6,6.3c-1,1.8-2.5,3.2-4.3,4.2-1.8,1-3.9,1.5-6.3,1.5h-11.8v-1.3h11.8c2.1,0,4-.4,5.7-1.3,1.6-.9,2.9-2.1,3.8-3.7.9-1.6,1.4-3.5,1.4-5.7s-.5-4.1-1.4-5.7c-.9-1.6-2.2-2.9-3.8-3.8-1.6-.9-3.5-1.4-5.7-1.4h-11.2v41.3h-1.3ZM966.7,344.9l10.5,19.4h-1.5l-10.5-19.4h1.5Z"/>
        <path class="sub" d="M1123.8,321.7l14.7,41h.2l14.7-41h1.4l-15.2,42.6h-1.8l-15.2-42.6h1.4Z"/>
        <path class="sub" d="M1305.8,321.7v42.6h-1.3v-42.6h1.3Z"/>
        <path class="sub" d="M1492,335h-1.4c-.3-1.4-.8-2.9-1.5-4.3-.8-1.5-1.8-2.8-3-4.1-1.3-1.2-2.8-2.3-4.5-3-1.7-.8-3.7-1.1-5.8-1.1s-5.6.8-8.1,2.4c-2.5,1.6-4.5,3.9-6,7-1.5,3.1-2.2,6.8-2.2,11.2s.7,8.2,2.2,11.3c1.5,3.1,3.5,5.4,6,6.9,2.5,1.6,5.2,2.4,8.1,2.4s4.1-.4,5.8-1.1c1.7-.8,3.2-1.8,4.5-3,1.3-1.2,2.3-2.6,3-4.1.8-1.5,1.3-2.9,1.5-4.4h1.4c-.3,1.5-.8,3.1-1.6,4.7-.8,1.6-1.9,3.1-3.2,4.5-1.3,1.4-3,2.5-4.9,3.4-1.9.9-4.1,1.3-6.6,1.3s-6.6-.9-9.2-2.7-4.7-4.4-6.2-7.7c-1.5-3.3-2.2-7.1-2.2-11.5s.7-8.2,2.2-11.5c1.5-3.3,3.6-5.8,6.2-7.7s5.7-2.7,9.2-2.7,4.7.4,6.6,1.3c1.9.9,3.5,2,4.9,3.4,1.3,1.4,2.4,2.9,3.2,4.5.8,1.6,1.3,3.2,1.6,4.7Z"/>
        <path class="sub" d="M1644,364.3v-42.6h22.7v1.3h-21.4v19.3h20.1v1.3h-20.1v19.3h22v1.3h-23.3Z"/>
        <path class="sub" d="M1842.3,332.4c-.2-2.9-1.3-5.3-3.4-7.2-2-1.9-4.7-2.8-8-2.8s-4.1.4-5.8,1.2c-1.7.8-3.1,2-4,3.4-1,1.4-1.5,3.1-1.5,5s.2,2.1.5,3c.4.9.9,1.8,1.6,2.5.8.7,1.7,1.4,2.8,2,1.1.6,2.5,1.1,4,1.6l4.8,1.5c1.8.6,3.4,1.2,4.8,1.9,1.3.7,2.5,1.5,3.3,2.4.9.9,1.5,1.9,2,2.9.4,1.1.6,2.3.6,3.6,0,2.2-.6,4.2-1.7,5.9-1.1,1.7-2.7,3.1-4.8,4.1-2,1-4.4,1.5-7.1,1.5s-4.9-.5-6.8-1.4c-1.9-.9-3.5-2.2-4.6-3.8-1.1-1.6-1.8-3.5-1.9-5.5h1.3c.1,1.8.7,3.4,1.7,4.8s2.4,2.5,4.1,3.3c1.7.8,3.8,1.2,6.1,1.2s4.6-.4,6.4-1.3c1.8-.9,3.3-2.1,4.3-3.6,1-1.5,1.5-3.3,1.5-5.3s-.3-2.9-1-4c-.7-1.2-1.7-2.2-3.1-3.1-1.4-.9-3.3-1.7-5.6-2.4l-4.8-1.5c-3.3-1.1-5.8-2.4-7.5-4.2-1.7-1.7-2.5-3.8-2.5-6.3s.5-4,1.6-5.6c1.1-1.7,2.6-3,4.5-3.9,1.9-1,4.1-1.4,6.5-1.4s4.6.5,6.4,1.5c1.8,1,3.3,2.3,4.4,4,1.1,1.7,1.7,3.7,1.8,5.8h-1.3Z"/>
      </svg>
      <div class="track"></div>
      <div class="caption">loading</div>
    </div>`;

  const MIN = 2400;                       // let the logo finish drawing before we leave
  const start = performance.now();
  function dismiss() {
    const wait = Math.max(0, MIN - (performance.now() - start));
    setTimeout(() => {
      el.classList.add('is-hidden');
      try { sessionStorage.setItem('sel-loaded', '1'); } catch (e) {}
      setTimeout(() => el.remove(), 650);
    }, wait);
  }
  if (document.readyState === 'complete') dismiss();
  else window.addEventListener('load', dismiss);
})();

/* ── Sticky header ── */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Mobile nav toggle ── */
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

nav.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ── Scroll spy + auto-hide quicknav (home page only) ── */
// Only spy on true in-page anchors ("#jobs"). Page links (services.html) navigate
// away, so they must NOT get a scroll highlight that implies they scroll in-page.
function sectionIdFor(href) {
  if (!href || !href.startsWith('#') || href.length < 2) return null;
  return href.slice(1);
}

function makeSpy(links) {
  const entries = [];
  links.forEach(link => {
    const id = sectionIdFor(link.getAttribute('href'));
    const sec = id ? document.getElementById(id) : null;
    if (sec) entries.push({ link, sec });
  });
  if (!entries.length) return null;
  let current = null;
  return (onChange) => {
    const line = window.scrollY + 140;
    // pick the entry with the greatest offsetTop that's still above the scroll line
    let active = entries[0], activeTop = -Infinity;
    for (const e of entries) {
      const top = e.sec.offsetTop;
      if (top <= line && top >= activeTop) { active = e; activeTop = top; }
    }
    if (active.link !== current) {
      links.forEach(l => l.classList.remove('active'));
      active.link.classList.add('active');
      current = active.link;
      if (onChange) onChange(active.link);
    }
  };
}

const quicknavEl = document.querySelector('.quicknav');
// Section spy only makes sense on the long single-page layout (the one with the #home hero)
const onHome = !!document.getElementById('home');
const navSpy = onHome ? makeSpy(document.querySelectorAll('.nav__link')) : null;
const quicknavSpy = onHome ? makeSpy(document.querySelectorAll('.quicknav__chip')) : null;

// keep the active chip scrolled into view within the horizontal quicknav bar
function centerChip(chip, behavior = 'smooth') {
  if (!quicknavEl) return;
  const target = chip.offsetLeft - (quicknavEl.clientWidth - chip.offsetWidth) / 2;
  quicknavEl.scrollTo({ left: Math.max(0, target), behavior });
}

// On load, bring the currently-active chip into view (e.g. "Contact" on the contact page,
// where it's set statically and would otherwise sit off-screen to the right)
const initialChip = document.querySelector('.quicknav__chip.active');
if (initialChip) centerChip(initialChip, 'auto');

let lastY = window.scrollY;
const onScroll = () => {
  const y = window.scrollY;
  if (navSpy) navSpy();
  if (quicknavSpy) quicknavSpy(centerChip);
  // hide the quicknav when scrolling down into content, reveal it when scrolling up
  if (quicknavEl) {
    if (y > lastY && y > 160) quicknavEl.classList.add('quicknav--hidden');
    else quicknavEl.classList.remove('quicknav--hidden');
  }
  lastY = y;
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── Fade-up on scroll ── */
const fadeEls = document.querySelectorAll(
  '.service-card, .step, .job-card, .testimonial, .about__metric, .stat, .feature-icon'
);
fadeEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
fadeEls.forEach(el => observer.observe(el));

/* ── Animate stat numbers ── */
function animateCount(el, target) {
  const duration = 1800;
  const start = performance.now();
  const from = 0;

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(from + (target - from) * eased);
    // Only update the number; the +/% suffix lives in the preserved teal <span>
    el.firstChild.textContent = value.toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const statNums = document.querySelectorAll('.stat__num');
const statObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const text = el.textContent.trim();
      const match = text.match(/^([\d,]+)([+%]?)$/);
      if (match) {
        const num = parseInt(match[1].replace(/,/g, ''));
        const tealSpan = el.querySelector('.teal');
        el.textContent = '';
        el.appendChild(document.createTextNode('0'));
        if (tealSpan) el.appendChild(tealSpan);
        animateCount(el, num);
      }
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
statNums.forEach(el => statObserver.observe(el));

/* ── Form submit ── */
function handleSubmit(e) {
  e.preventDefault();
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  e.target.reset();
  setTimeout(() => toast.classList.remove('show'), 4000);
}

/* ── Smooth scroll for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;          // ignore placeholder links
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── FAQ accordion (Contact page) ── */
document.querySelectorAll('.faq-item__q').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.faq-item').classList.toggle('open');
  });
});

/* ── CV file-name preview (Submit CV page) ── */
const cvFile = document.getElementById('cvFile');
if (cvFile) {
  cvFile.addEventListener('change', () => {
    const nameEl = document.getElementById('cvFileName');
    if (nameEl) nameEl.textContent = cvFile.files.length ? cvFile.files[0].name : '';
  });
}

/* ── Scroll progress bar + back-to-top (injected, all pages) ── */
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

const toTop = document.createElement('button');
toTop.className = 'to-top';
toTop.setAttribute('aria-label', 'Back to top');
toTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.body.appendChild(toTop);

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
  toTop.classList.toggle('show', scrollTop > 600);
}, { passive: true });
