<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-pattern"></div>
      </div>
      <div class="container hero-content">
        <div class="hero-text">
          <span class="hero-badge">Houston's Trusted Property Partner</span>
          <h1>
            Property Management
            <span class="hero-accent">Made Simple</span>
          </h1>
          <p class="hero-description">
            We handle everything from tenant screening to maintenance, so you can enjoy
            the rewards of property ownership without the stress of daily management.
          </p>
          <div class="hero-ctas">
            <router-link to="/get-started" class="btn btn-primary">
              Get Started
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </router-link>
            <router-link to="/services" class="btn btn-secondary">
              View Services
            </router-link>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">20+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-number">500+</span>
              <span class="stat-label">Properties Managed</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-number">98%</span>
              <span class="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-card-stack">
            <div class="floating-card card-1">
              <div class="card-icon blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
              </div>
              <div class="card-content">
                <span class="card-title">Property Listed</span>
                <span class="card-subtitle">Sugar Land, TX</span>
              </div>
              <span class="card-badge success">Active</span>
            </div>
            <div class="floating-card card-2">
              <div class="card-icon green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div class="card-content">
                <span class="card-title">Rent Collected</span>
                <span class="card-value">$2,450.00</span>
              </div>
            </div>
            <div class="floating-card card-3">
              <div class="card-icon purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div class="card-content">
                <span class="card-title">Tenant Screened</span>
                <span class="card-subtitle">Background Verified</span>
              </div>
              <span class="card-badge">Complete</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Indicators -->
    <section class="trust-section">
      <div class="container">
        <div class="trust-content">
          <span class="trust-label">Proudly Serving</span>
          <div class="trust-locations">
            <span>Houston</span>
            <span class="dot"></span>
            <span>Sugar Land</span>
            <span class="dot"></span>
            <span>Greater Houston Area</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">What We Do</span>
          <h2>Comprehensive Property Management</h2>
          <p>From leasing to maintenance, we handle every aspect of property management so you don't have to.</p>
        </div>
        <div class="services-grid">
          <article class="service-card" v-for="service in services" :key="service.title">
            <div class="service-icon" :class="service.color">
              <component :is="service.icon" />
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <router-link :to="service.link" class="service-link">
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </router-link>
          </article>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-section">
      <div class="container">
        <div class="why-content">
          <div class="why-text">
            <span class="section-tag">Why Key To Home</span>
            <h2>Your Investment, Our Priority</h2>
            <p class="why-description">
              We understand that your property is more than just an investment—it's your future.
              That's why we treat every property as if it were our own.
            </p>
            <ul class="why-list">
              <li>
                <span class="check-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </span>
                <span>Transparent pricing with no hidden fees</span>
              </li>
              <li>
                <span class="check-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </span>
                <span>24/7 emergency maintenance support</span>
              </li>
              <li>
                <span class="check-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </span>
                <span>Thorough tenant screening process</span>
              </li>
              <li>
                <span class="check-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </span>
                <span>Real-time online owner portal access</span>
              </li>
              <li>
                <span class="check-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </span>
                <span>Local market expertise in Houston area</span>
              </li>
            </ul>
            <router-link to="/why-hire-us" class="btn btn-dark">
              See All Benefits
            </router-link>
          </div>
          <div class="why-visual">
            <div class="metric-cards">
              <div class="metric-card">
                <div class="metric-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <div class="metric-content">
                  <span class="metric-value">8-10%</span>
                  <span class="metric-label">Management Fee</span>
                </div>
              </div>
              <div class="metric-card highlight">
                <div class="metric-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <div class="metric-content">
                  <span class="metric-value">$0</span>
                  <span class="metric-label">Setup Fee</span>
                </div>
              </div>
              <div class="metric-card">
                <div class="metric-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22,4 12,14.01 9,11.01"/>
                  </svg>
                </div>
                <div class="metric-content">
                  <span class="metric-value">100%</span>
                  <span class="metric-label">Electronic Process</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial -->
    <section class="testimonial-section">
      <div class="container">
        <div class="testimonial-card">
          <div class="quote-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
          <blockquote>
            "KTH is the best management company out there. They are so responsive and helpful.
            I would highly recommend them to anyone looking for property management services."
          </blockquote>
          <div class="testimonial-author">
            <div class="author-info">
              <span class="author-name">Satisfied Property Owner</span>
              <span class="author-title">Houston, TX</span>
            </div>
            <div class="rating">
              <span v-for="n in 5" :key="n" class="star">★</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Experience Stress-Free Property Management?</h2>
          <p>Let us show you what true peace of mind feels like. Get a customized proposal for your property today.</p>
          <div class="cta-buttons">
            <router-link to="/get-started" class="btn btn-primary">
              Get Your Free Proposal
            </router-link>
            <router-link to="/contact" class="btn btn-secondary-light">
              Contact Us
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      services: [
        {
          title: 'Leasing & Marketing',
          description: 'Professional marketing on HAR, MLS, and major real estate websites to minimize vacancy time.',
          icon: 'IconMarketing',
          color: 'blue',
          link: '/services'
        },
        {
          title: 'Tenant Screening',
          description: 'Comprehensive background checks including credit, rental history, and employment verification.',
          icon: 'IconScreening',
          color: 'green',
          link: '/services'
        },
        {
          title: 'Rent Collection',
          description: 'Automated rent collection with direct deposit and detailed monthly financial reports.',
          icon: 'IconCollection',
          color: 'purple',
          link: '/services'
        },
        {
          title: 'Maintenance',
          description: '24/7 emergency support and coordinated repairs with trusted local contractors.',
          icon: 'IconMaintenance',
          color: 'orange',
          link: '/services'
        },
        {
          title: 'Financial Reporting',
          description: 'Monthly statements, year-end reports, and 1099s for complete financial transparency.',
          icon: 'IconReporting',
          color: 'teal',
          link: '/services'
        },
        {
          title: 'Legal Compliance',
          description: 'Stay compliant with federal, state, and local regulations including fair housing laws.',
          icon: 'IconCompliance',
          color: 'red',
          link: '/services'
        }
      ]
    }
  },
  components: {
    IconMarketing: {
      template: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="17,8 12,3 7,8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>`
    },
    IconScreening: {
      template: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="8.5" cy="7" r="4"/>
        <path d="M20 8v6M23 11h-6"/>
      </svg>`
    },
    IconCollection: {
      template: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>`
    },
    IconMaintenance: {
      template: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>`
    },
    IconReporting: {
      template: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10,9 9,9 8,9"/>
      </svg>`
    },
    IconCompliance: {
      template: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9,12 11,14 15,10"/>
      </svg>`
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 6rem 0 4rem;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 113, 188, 0.03) 0%, rgba(255, 255, 255, 0) 50%);
}

.hero-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(0, 113, 188, 0.08) 1px, transparent 1px);
  background-size: 40px 40px;
}

.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--kth-primary-light);
  color: var(--kth-primary);
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--kth-radius-full);
  margin-bottom: 1.5rem;
  animation: fadeInUp 0.6s ease forwards;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  color: var(--kth-gray-900);
  margin-bottom: 1.5rem;
  animation: fadeInUp 0.6s ease 0.1s forwards;
  opacity: 0;
}

.hero-accent {
  display: block;
  background: var(--kth-gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--kth-gray-600);
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 540px;
  animation: fadeInUp 0.6s ease 0.2s forwards;
  opacity: 0;
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  animation: fadeInUp 0.6s ease 0.3s forwards;
  opacity: 0;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--kth-gray-200);
  animation: fadeInUp 0.6s ease 0.4s forwards;
  opacity: 0;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: var(--kth-gray-900);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--kth-gray-500);
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--kth-gray-200);
}

/* Hero Visual */
.hero-visual {
  position: relative;
  height: 500px;
  animation: fadeIn 0.8s ease 0.3s forwards;
  opacity: 0;
}

.hero-card-stack {
  position: relative;
  width: 100%;
  height: 100%;
}

.floating-card {
  position: absolute;
  background: var(--kth-white);
  border-radius: var(--kth-radius-lg);
  padding: 1.25rem;
  box-shadow: var(--kth-shadow-xl);
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid var(--kth-gray-100);
}

.card-1 {
  top: 10%;
  left: 0;
  animation: float 6s ease-in-out infinite;
}

.card-2 {
  top: 40%;
  right: 0;
  animation: float 6s ease-in-out 1s infinite;
}

.card-3 {
  bottom: 10%;
  left: 10%;
  animation: float 6s ease-in-out 2s infinite;
}

.card-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--kth-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-icon.blue {
  background: rgba(0, 113, 188, 0.1);
  color: var(--kth-primary);
}

.card-icon.green {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
}

.card-icon.purple {
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
}

.card-content {
  display: flex;
  flex-direction: column;
}

.card-title {
  font-weight: 600;
  color: var(--kth-gray-900);
  font-size: 0.9375rem;
}

.card-subtitle {
  font-size: 0.8125rem;
  color: var(--kth-gray-500);
}

.card-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: #22c55e;
}

.card-badge {
  padding: 0.25rem 0.75rem;
  background: var(--kth-gray-100);
  color: var(--kth-gray-600);
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: var(--kth-radius-full);
}

.card-badge.success {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
}

/* Trust Section */
.trust-section {
  padding: 2rem 0;
  background: var(--kth-gray-100);
  border-top: 1px solid var(--kth-gray-200);
  border-bottom: 1px solid var(--kth-gray-200);
}

.trust-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.trust-label {
  font-size: 0.875rem;
  color: var(--kth-gray-500);
  font-weight: 500;
}

.trust-locations {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  color: var(--kth-gray-800);
}

.trust-locations .dot {
  width: 4px;
  height: 4px;
  background: var(--kth-primary);
  border-radius: 50%;
}

/* Services Section */
.services-section {
  padding: 6rem 0;
}

.section-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 4rem;
}

.section-tag {
  display: inline-block;
  padding: 0.375rem 1rem;
  background: var(--kth-primary-light);
  color: var(--kth-primary);
  font-size: 0.8125rem;
  font-weight: 600;
  border-radius: var(--kth-radius-full);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--kth-gray-900);
}

.section-header p {
  font-size: 1.125rem;
  color: var(--kth-gray-600);
  line-height: 1.7;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.service-card {
  background: var(--kth-white);
  border: 1px solid var(--kth-gray-200);
  border-radius: var(--kth-radius-lg);
  padding: 2rem;
  transition: all var(--kth-transition-base);
}

.service-card:hover {
  border-color: var(--kth-primary);
  box-shadow: var(--kth-shadow-card-hover);
  transform: translateY(-4px);
}

.service-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--kth-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.service-icon.blue { background: rgba(0, 113, 188, 0.1); color: var(--kth-primary); }
.service-icon.green { background: rgba(34, 197, 94, 0.1); color: #22c55e; }
.service-icon.purple { background: rgba(139, 92, 246, 0.1); color: #8b5cf6; }
.service-icon.orange { background: rgba(249, 115, 22, 0.1); color: #f97316; }
.service-icon.teal { background: rgba(20, 184, 166, 0.1); color: #14b8a6; }
.service-icon.red { background: rgba(239, 68, 68, 0.1); color: #ef4444; }

.service-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--kth-gray-900);
}

.service-card p {
  font-size: 0.9375rem;
  color: var(--kth-gray-600);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--kth-primary);
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  transition: gap var(--kth-transition-fast);
}

.service-link:hover {
  gap: 0.75rem;
}

/* Why Section */
.why-section {
  padding: 6rem 0;
  background: var(--kth-gray-100);
}

.why-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.why-text h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.why-description {
  font-size: 1.125rem;
  color: var(--kth-gray-600);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.why-list {
  list-style: none;
  margin-bottom: 2rem;
}

.why-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 0;
  font-size: 1rem;
  color: var(--kth-gray-700);
}

.check-icon {
  width: 24px;
  height: 24px;
  background: var(--kth-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.check-icon svg {
  width: 14px;
  height: 14px;
}

/* Metric Cards */
.metric-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.metric-card {
  background: var(--kth-white);
  border-radius: var(--kth-radius-lg);
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  box-shadow: var(--kth-shadow-md);
  transition: all var(--kth-transition-base);
}

.metric-card:hover {
  transform: translateX(8px);
  box-shadow: var(--kth-shadow-lg);
}

.metric-card.highlight {
  background: var(--kth-gradient-primary);
  color: white;
}

.metric-card.highlight .metric-value,
.metric-card.highlight .metric-label {
  color: white;
}

.metric-icon {
  width: 64px;
  height: 64px;
  background: var(--kth-primary-light);
  border-radius: var(--kth-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--kth-primary);
}

.metric-card.highlight .metric-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.metric-content {
  display: flex;
  flex-direction: column;
}

.metric-value {
  font-size: 2rem;
  font-weight: 800;
  color: var(--kth-gray-900);
}

.metric-label {
  font-size: 0.9375rem;
  color: var(--kth-gray-600);
}

/* Testimonial Section */
.testimonial-section {
  padding: 6rem 0;
}

.testimonial-card {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 3rem;
}

.quote-icon {
  color: var(--kth-primary);
  opacity: 0.2;
  margin-bottom: 1.5rem;
}

.testimonial-card blockquote {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--kth-gray-800);
  line-height: 1.5;
  margin-bottom: 2rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.author-info {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.author-name {
  font-weight: 600;
  color: var(--kth-gray-900);
}

.author-title {
  font-size: 0.875rem;
  color: var(--kth-gray-500);
}

.rating {
  display: flex;
  gap: 0.25rem;
}

.star {
  color: #fbbf24;
  font-size: 1.25rem;
}

/* CTA Section */
.cta-section {
  padding: 6rem 0;
  background: var(--kth-gradient-dark);
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--kth-white);
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn-secondary-light {
  background: transparent;
  color: var(--kth-white);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary-light:hover {
  background: var(--kth-white);
  color: var(--kth-gray-900);
  border-color: var(--kth-white);
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-visual {
    display: none;
  }

  .hero h1 {
    font-size: 2.75rem;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .why-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .metric-cards {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .metric-card {
    flex: 1 1 280px;
    max-width: 320px;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 4rem 0 3rem;
  }

  .hero h1 {
    font-size: 2.25rem;
  }

  .hero-ctas {
    flex-direction: column;
  }

  .hero-stats {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .stat-divider {
    display: none;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .section-header h2,
  .why-text h2,
  .cta-content h2 {
    font-size: 1.875rem;
  }

  .testimonial-card blockquote {
    font-size: 1.25rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .metric-card {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
