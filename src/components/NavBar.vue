<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <nav class="navbar">
      <div class="container navbar-content">
        <router-link to="/" class="logo-container" @click="closeMobileMenu">
          <img src="@/assets/KTHKeyLogo.png" alt="Key To Home Property Management" class="logo">
        </router-link>

        <button
          class="mobile-menu-toggle"
          @click="toggleMobileMenu"
          :class="{ 'active': mobileMenuOpen }"
          aria-label="Toggle navigation menu"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>

        <div :class="['nav-menu', { 'mobile-open': mobileMenuOpen }]">
          <div class="nav-links">
            <router-link to="/" @click="closeMobileMenu" class="nav-link">Home</router-link>

            <div class="nav-dropdown">
              <button class="nav-link dropdown-trigger">
                Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6,9 12,15 18,9"/>
                </svg>
              </button>
              <div class="dropdown-menu">
                <router-link to="/services" @click="closeMobileMenu">All Services</router-link>
                <router-link to="/services#leasing" @click="handleHashLink('leasing')">Leasing & Marketing</router-link>
                <router-link to="/services#screening" @click="handleHashLink('screening')">Tenant Screening</router-link>
                <router-link to="/services#maintenance" @click="handleHashLink('maintenance')">Maintenance</router-link>
              </div>
            </div>

            <router-link to="/why-hire-us" @click="closeMobileMenu" class="nav-link">Why Hire Us</router-link>
            <router-link to="/faq" @click="closeMobileMenu" class="nav-link">FAQ</router-link>
            <router-link to="/about" @click="closeMobileMenu" class="nav-link">About</router-link>
            <router-link to="/contact" @click="closeMobileMenu" class="nav-link">Contact</router-link>
          </div>

          <div class="nav-actions">
            <a href="https://app.doorloop.com/auth/login" class="btn-portal" target="_blank" rel="noopener">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              Resident Portal
            </a>
            <router-link to="/get-started" class="btn btn-primary btn-nav" @click="closeMobileMenu">
              Get Started
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      mobileMenuOpen: false,
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
      document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : ''
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
      document.body.style.overflow = ''
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 20
    },
    handleHashLink(hash) {
      this.closeMobileMenu()
      // If already on services page, manually scroll to element
      if (this.$route.path === '/services') {
        this.$nextTick(() => {
          const el = document.getElementById(hash)
          if (el) {
            const offset = 100 // Account for fixed navbar
            const top = el.getBoundingClientRect().top + window.scrollY - offset
            window.scrollTo({ top, behavior: 'smooth' })
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all var(--kth-transition-base);
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
}

.navbar {
  height: 80px;
}

.navbar-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-container {
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 1001;
}

.logo {
  height: 48px;
  width: auto;
  transition: transform var(--kth-transition-fast);
}

.logo:hover {
  transform: scale(1.02);
}

/* Navigation Menu */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  padding: 0.625rem 1rem;
  color: var(--kth-gray-700);
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 500;
  border-radius: var(--kth-radius-md);
  transition: all var(--kth-transition-fast);
  display: flex;
  align-items: center;
  gap: 0.375rem;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

.nav-link:hover {
  color: var(--kth-primary);
  background: var(--kth-primary-light);
}

.nav-link.router-link-active {
  color: var(--kth-primary);
  font-weight: 600;
}

/* Dropdown */
.nav-dropdown {
  position: relative;
}

.dropdown-trigger svg {
  transition: transform var(--kth-transition-fast);
}

.nav-dropdown:hover .dropdown-trigger svg {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 220px;
  background: var(--kth-white);
  border-radius: var(--kth-radius-md);
  box-shadow: var(--kth-shadow-xl);
  padding: 0.5rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all var(--kth-transition-fast);
  border: 1px solid var(--kth-gray-100);
}

.nav-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu a {
  display: block;
  padding: 0.75rem 1rem;
  color: var(--kth-gray-700);
  text-decoration: none;
  font-size: 0.875rem;
  border-radius: var(--kth-radius-sm);
  transition: all var(--kth-transition-fast);
}

.dropdown-menu a:hover {
  background: var(--kth-primary-light);
  color: var(--kth-primary);
}

/* Navigation Actions */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;
  padding-left: 1rem;
  border-left: 1px solid var(--kth-gray-200);
}

.btn-portal {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: var(--kth-gray-600);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: var(--kth-radius-md);
  transition: all var(--kth-transition-fast);
}

.btn-portal:hover {
  color: var(--kth-primary);
  background: var(--kth-primary-light);
}

.btn-nav {
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
  border-radius: var(--kth-radius-sm);
  transition: background var(--kth-transition-fast);
}

.mobile-menu-toggle:hover {
  background: var(--kth-gray-100);
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background: var(--kth-gray-800);
  border-radius: 2px;
  transition: all var(--kth-transition-fast);
}

.mobile-menu-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Tablet & Mobile */
@media (max-width: 1024px) {
  .nav-actions {
    margin-left: 0.5rem;
    padding-left: 0.5rem;
  }

  .btn-portal span {
    display: none;
  }

  .nav-link {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
  }
}

@media (max-width: 900px) {
  .mobile-menu-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--kth-white);
    flex-direction: column;
    justify-content: flex-start;
    padding: 100px 2rem 2rem;
    opacity: 0;
    visibility: hidden;
    transform: translateX(100%);
    transition: all var(--kth-transition-base);
  }

  .nav-menu.mobile-open {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }

  .nav-links {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    width: 100%;
  }

  .nav-link {
    padding: 1rem;
    font-size: 1.125rem;
    justify-content: space-between;
    border-bottom: 1px solid var(--kth-gray-100);
  }

  .nav-dropdown {
    width: 100%;
  }

  .dropdown-trigger {
    width: 100%;
    justify-content: space-between;
  }

  .dropdown-menu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    border: none;
    padding: 0 0 0 1rem;
    background: var(--kth-gray-50);
    margin: 0.5rem 0;
    border-radius: var(--kth-radius-sm);
  }

  .dropdown-menu a {
    padding: 0.875rem 1rem;
  }

  .nav-actions {
    flex-direction: column;
    width: 100%;
    margin: 2rem 0 0;
    padding: 2rem 0 0;
    border-left: none;
    border-top: 1px solid var(--kth-gray-200);
    gap: 1rem;
  }

  .btn-portal {
    width: 100%;
    justify-content: center;
    padding: 1rem;
    background: var(--kth-gray-100);
    border-radius: var(--kth-radius-md);
  }

  .btn-nav {
    width: 100%;
    padding: 1rem;
    justify-content: center;
  }
}

/* Spacer for fixed header */
.header + main {
  padding-top: 80px;
}
</style>
