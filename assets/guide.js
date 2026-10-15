/* ============================================================
   avonsi.com — shared guide navigation
   assets/guide.js · v1.0
   ============================================================ */

(function () {
  let currentPage = 0;
  let totalPages  = 0;

  function getPages() {
    return document.querySelectorAll('.guide-page');
  }

  window.showPage = function (n) {
    const pages = getPages();
    totalPages = pages.length;
    n = Math.max(0, Math.min(n, totalPages - 1));
    pages.forEach((p, i) => p.classList.toggle('active', i === n));
    currentPage = n;
    updateNav();
    window.scrollTo(0, 0);
  };

  window.navNext = function () {
    showPage(currentPage + 1);
  };

  window.navPrev = function () {
    showPage(currentPage - 1);
  };

  function updateNav() {
    const prevBtn = document.getElementById('nav-prev');
    const nextBtn = document.getElementById('nav-next');
    const titleEl = document.getElementById('nav-title');

    if (prevBtn) {
      if (currentPage <= 0) {
        prevBtn.setAttribute('aria-disabled', 'true');
        prevBtn.style.opacity = '0.3';
        prevBtn.style.pointerEvents = 'none';
      } else {
        prevBtn.removeAttribute('aria-disabled');
        prevBtn.style.opacity = '';
        prevBtn.style.pointerEvents = '';
      }
    }

    if (nextBtn) {
      if (currentPage >= totalPages - 1) {
        nextBtn.setAttribute('aria-disabled', 'true');
        nextBtn.style.opacity = '0.3';
        nextBtn.style.pointerEvents = 'none';
      } else {
        nextBtn.removeAttribute('aria-disabled');
        nextBtn.style.opacity = '';
        nextBtn.style.pointerEvents = '';
      }
    }

    /* Update title to show current chapter name if available */
    if (titleEl && currentPage > 0) {
      const activePage = document.querySelector('.guide-page.active');
      if (activePage) {
        const eyebrow = activePage.querySelector('.chapter-eyebrow');
        const chTitle = activePage.querySelector('.chapter-title');
        if (eyebrow && chTitle) {
          titleEl.textContent = eyebrow.textContent.trim() + ' · ' + chTitle.textContent.trim();
        } else if (chTitle) {
          titleEl.textContent = chTitle.textContent.trim();
        }
      }
    } else if (titleEl && currentPage === 0) {
      /* Restore original guide title on TOC page */
      const guideHeader = document.querySelector('guide-header');
      if (guideHeader) {
        titleEl.textContent = guideHeader.getAttribute('title') || '';
      }
    }
  }

  /* Keyboard navigation */
  document.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') navNext();
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   navPrev();
  });

  /* Init on DOM ready */
  document.addEventListener('DOMContentLoaded', function () {
    totalPages = getPages().length;
    updateNav();
  });
})();
