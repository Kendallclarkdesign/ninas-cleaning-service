// Shared navigation HTML
const NAV_HTML = `
<nav class="site-nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">Nina's <em>Cleaning</em></a>
    <div class="nav-links">
      <a href="services.html">Services</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
      <a href="book.html" class="btn-primary nav-cta">Book Now</a>
    </div>
    <button class="hamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-menu">
  <a href="index.html">Home</a>
  <a href="services.html">Services</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
  <a href="https://www.facebook.com/p/Ninas-Cleaning-Service-61555247232431/" target="_blank" rel="noopener noreferrer" style="font-size:22px;opacity:.6">Facebook</a>
  <a href="book.html" class="btn-primary">Book Now</a>
</div>
`;

// Shared footer HTML
const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <div class="footer-logo">Nina's <em>Cleaning</em></div>
        <p class="footer-tagline">Professional residential cleaning serving Bernville and surrounding Berks County, PA.</p>
        <div class="footer-stars">
          <span class="stars">★★★★★</span>
          <span class="rating">4.9 · 8 Google Reviews</span>
        </div>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Pages</div>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="about.html">About Nina</a></li>
          <li><a href="book.html">Book Now</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Contact</div>
        <p><a href="tel:+17177080026">(717) 708-0026</a></p>
        <p style="margin-top:.4rem"><a href="mailto:fayewiczn@gmail.com">fayewiczn@gmail.com</a></p>
        <p style="margin-top:.4rem;font-size:12px;color:rgba(247,243,238,.4)">203 Tulpehocken St<br>Bernville, PA 19506</p>
        <a href="https://www.facebook.com/p/Ninas-Cleaning-Service-61555247232431/" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;margin-top:.75rem;font-size:12px;color:rgba(247,243,238,.5);transition:color .15s" onmouseover="this.style.color='rgba(247,243,238,.9)'" onmouseout="this.style.color='rgba(247,243,238,.5)'">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          Facebook
        </a>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Service Area</div>
        <p style="font-size:12px">Bernville · Womelsdorf · Robesonia · Myerstown · Strausstown · and surrounding areas</p>
        <a href="book.html" class="btn-primary" style="margin-top:1rem;font-size:12px;padding:10px 18px">Get a Free Quote</a>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="footer-bottom">
      <p>© 2025 Nina's Cleaning Service. All rights reserved.</p>
      <p>Built by <a href="#" style="color:rgba(247,243,238,.4)">21 Connect Digital</a></p>
    </div>
  </div>
</footer>
`;

// Sticky CTA HTML (mobile only)
const STICKY_CTA_HTML = `
<div class="sticky-cta">
  <a href="book.html" class="btn-primary">Book Now</a>
  <span class="sticky-cta-note">Free quote · Nina responds in 24hrs</span>
</div>
`;

// Inject shared components
document.addEventListener('DOMContentLoaded', () => {
  const navEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  const stickyEl = document.getElementById('sticky-cta-placeholder');

  if (navEl) navEl.outerHTML = NAV_HTML;
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;
  if (stickyEl) stickyEl.outerHTML = STICKY_CTA_HTML;
});
