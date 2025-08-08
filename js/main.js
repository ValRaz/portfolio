// 1. Smooth‐scroll any in-page link in header or footer
document.querySelectorAll('.site-header__link[href^="#"], .site-footer__link[href^="#"]')
  .forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }

      // 1a. If this link lives inside a nav that’s open, close it
      const nav = this.closest('nav.open');
      if (nav) {
        nav.classList.remove('open');
        // update its toggle button’s ARIA state
        const btn = nav.querySelector('button[aria-expanded]');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });
  });

// 2. Toggle button handler for both header and footer
document.querySelectorAll('.site-header__toggle, .site-footer__toggle')
  .forEach(btn => {
    btn.addEventListener('click', () => {
      const nav = btn.closest('nav');
      const isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  });