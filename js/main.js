// Smooth scrolling for nav links
document.querySelectorAll('.site-header__link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });  // :contentReference[oaicite:19]{index=19}
  });
});

// Mobile nav toggle
const toggle = document.querySelector('.site-header__toggle');
const nav = document.querySelector('.site-header__nav');
toggle.addEventListener('click', () => {
  nav.classList.toggle('site-header__nav--open');
});