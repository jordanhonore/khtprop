<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="@/assets/KTHKeyLogo.png" alt="Key To Home Property Management" class="footer-logo">
            <p class="brand-description">
              Professional property management services in Houston and Sugar Land.
              We treat your property as if it were our own.
            </p>
            <div class="social-links">
              <a href="#" aria-label="Facebook" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/services">Services</router-link></li>
              <li><router-link to="/why-hire-us">Why Hire Us</router-link></li>
              <li><router-link to="/faq">FAQ</router-link></li>
              <li><router-link to="/about">About Us</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>

          <div class="footer-links">
            <h3>Services</h3>
            <ul>
              <li><router-link to="/services">Leasing & Marketing</router-link></li>
              <li><router-link to="/services">Tenant Screening</router-link></li>
              <li><router-link to="/services">Rent Collection</router-link></li>
              <li><router-link to="/services">Maintenance</router-link></li>
              <li><router-link to="/services">Financial Reporting</router-link></li>
            </ul>
          </div>

          <div class="footer-contact">
            <h3>Contact Us</h3>
            <div class="contact-info">
              <div class="contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <p>77 Sugar Creek Center Blvd. Suite 600</p>
                  <p>Sugar Land, TX 77479</p>
                </div>
              </div>
              <div class="contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <p>2711 Colquitt St.</p>
                  <p>Houston, TX 77098</p>
                </div>
              </div>
              <div class="contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:281-241-6902">(281) 241-6902</a>
              </div>
              <div class="contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:office@kthpropertymanagement.com">office@kthpropertymanagement.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="bottom-content">
          <p>&copy; {{ currentYear }} Key To Home Property Management. All rights reserved.</p>
          <div class="bottom-links">
            <span>Proudly serving Houston & Sugar Land, TX</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
.footer {
  margin-top: auto;
}

.footer-main {
  background: var(--kth-gray-900);
  padding: 4rem 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  gap: 3rem;
}

.footer-brand {
  padding-right: 2rem;
}

.footer-logo {
  height: 44px;
  width: auto;
  margin-bottom: 1.25rem;
  filter: brightness(0) invert(1);
}

.brand-description {
  font-size: 0.9375rem;
  color: var(--kth-gray-400);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--kth-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--kth-white);
  transition: all var(--kth-transition-fast);
}

.social-link:hover {
  background: var(--kth-primary);
  transform: translateY(-2px);
}

/* Footer Links */
.footer-links h3,
.footer-contact h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--kth-white);
  margin-bottom: 1.25rem;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: var(--kth-gray-400);
  text-decoration: none;
  font-size: 0.9375rem;
  transition: color var(--kth-transition-fast);
}

.footer-links a:hover {
  color: var(--kth-white);
}

/* Footer Contact */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: var(--kth-gray-400);
  font-size: 0.875rem;
}

.contact-item svg {
  flex-shrink: 0;
  margin-top: 2px;
}

.contact-item p {
  margin: 0;
  line-height: 1.5;
}

.contact-item a {
  color: var(--kth-gray-400);
  text-decoration: none;
  transition: color var(--kth-transition-fast);
}

.contact-item a:hover {
  color: var(--kth-white);
}

/* Footer Bottom */
.footer-bottom {
  background: var(--kth-black);
  padding: 1.5rem 0;
}

.bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.bottom-content p {
  color: var(--kth-gray-500);
  font-size: 0.875rem;
  margin: 0;
}

.bottom-links {
  display: flex;
  gap: 1.5rem;
}

.bottom-links span {
  color: var(--kth-gray-500);
  font-size: 0.875rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  .footer-brand {
    grid-column: 1 / -1;
    padding-right: 0;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .footer-main {
    padding: 3rem 0;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .footer-brand {
    text-align: center;
  }

  .footer-links h3,
  .footer-contact h3 {
    margin-bottom: 1rem;
  }

  .contact-info {
    align-items: center;
  }

  .contact-item {
    justify-content: center;
    text-align: left;
  }

  .bottom-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>
