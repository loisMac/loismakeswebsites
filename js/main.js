// ============================================
// Scroll fade-in animations
// ============================================
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

// ============================================
// Cursor trail (desktop only)
// ============================================
if (!('ontouchstart' in window)) {
  let lastTrailTime = 0;
  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastTrailTime < 55) return;
    lastTrailTime = now;
    const dot = document.createElement('span');
    dot.className = 'cursor-trail';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 700);
  });
}

// ============================================
// Close mobile nav after link click
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const instance = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });
        instance.hide();
      }
    });
  });
});
