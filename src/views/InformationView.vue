<template>
  <div class="information">
    <div class="content">
      <h1>About Us</h1>

      <section class="intro" aria-labelledby="intro-heading">
        <h2 id="intro-heading" class="visually-hidden">Introduction</h2>
        <p>At KTH Property Management, we are not just property managers — we are your strategic partners in real estate. With over 10 years of experience in residential and commercial property management and transactions, our team brings a rare combination of market expertise, operational efficiency, and personalized care to every property we manage.</p>

        <p>We know that successful property ownership requires more than just collecting rent or fixing a leaky faucet. That's why we offer a comprehensive, end-to-end management solution designed to simplify ownership and maximize value. From leasing and tenant screening to maintenance, compliance, and even securing competitive insurance quotes, we handle it all — so you don't have to.</p>
      </section>

      <section class="what-makes-us-different" aria-labelledby="different-heading">
        <h2 id="different-heading">What Makes Us Different?</h2>

        <article class="feature">
          <h3>Experience That Matters</h3>
          <p>Our leadership team has managed everything from single-family homes and apartment complexes to shopping centers and office buildings. We've negotiated leases, handled capital improvements, and navigated complex real estate transactions — giving us the insight to anticipate issues before they arise.</p>
        </article>

        <article class="feature">
          <h3>Hands-Off Ownership, Hands-On Management</h3>
          <p>We provide a white-glove, concierge-style service tailored to investors who value peace of mind. Whether you live next door or across the globe, you'll always know your property is in capable hands.</p>
        </article>

        <article class="feature">
          <h3>Transparent, Responsive, Accountable</h3>
          <p>We believe in clear communication, real-time reporting, and prompt responses. You'll never be left wondering what's going on with your property — we keep you informed every step of the way.</p>
        </article>

        <article class="feature">
          <h3>Customized Solutions, Scalable Results</h3>
          <p>No two properties or clients are the same. We tailor our approach to fit your goals — whether it's stabilizing an underperforming asset, scaling your portfolio, or maintaining long-term cash flow.</p>
        </article>
      </section>

      <section class="closing" aria-labelledby="closing-heading">
        <h2 id="closing-heading" class="visually-hidden">Get Started</h2>
        <p>Whether you're an experienced investor or a first-time landlord, we're here to help you succeed — efficiently, ethically, and profitably.</p>
        <p class="highlight">Let us show you what true peace of mind in property management feels like.</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InformationView'
}
</script>

<style scoped>
/* CSS Custom Properties for brand consistency */
.information {
  --kth-primary: #3498db;
  --kth-primary-dark: #2980b9;
  --kth-heading-dark: #2c3e50;
  --kth-heading-medium: #34495e;
  --kth-text: #555;
  --kth-background: #f8f9fa;
  --kth-white: #ffffff;
  --kth-shadow: rgba(0, 0, 0, 0.1);
  --kth-radius-sm: 8px;
  --kth-radius-md: 12px;

  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  background-color: var(--kth-background);
}

.content {
  background: var(--kth-white);
  padding: 3rem;
  border-radius: var(--kth-radius-md);
  box-shadow: 0 4px 6px var(--kth-shadow);
}

/* Visually hidden but accessible to screen readers */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

h1 {
  color: var(--kth-heading-dark);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
}

h2 {
  color: var(--kth-heading-medium);
  font-size: 2rem;
  margin: 3rem 0 2rem 0;
  font-weight: 600;
}

h3 {
  color: var(--kth-primary);
  font-size: 1.4rem;
  margin: 2rem 0 1rem 0;
  font-weight: 600;
}

.intro p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--kth-text);
  margin-bottom: 1.5rem;
}

.feature {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: var(--kth-background);
  border-radius: var(--kth-radius-sm);
  border-left: 4px solid var(--kth-primary);
}

.feature h3 {
  margin-top: 0;
}

.feature p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--kth-text);
  margin: 0;
}

.closing {
  margin-top: 3rem;
  padding: 2rem;
  background-color: var(--kth-primary-dark);
  background: linear-gradient(135deg, var(--kth-primary), var(--kth-primary-dark));
  border-radius: var(--kth-radius-sm);
  color: var(--kth-white);
}

.closing p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.closing .highlight {
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  font-style: italic;
  margin-bottom: 0;
}

/* Tablet breakpoint */
@media (max-width: 1024px) {
  .content {
    padding: 2.5rem;
  }

  h1 {
    font-size: 2.25rem;
  }

  h2 {
    font-size: 1.8rem;
  }
}

/* Mobile breakpoint */
@media (max-width: 768px) {
  .information {
    padding: 1rem;
  }

  .content {
    padding: 1.5rem;
  }

  h1 {
    font-size: 1.75rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.15rem;
  }

  .feature {
    padding: 1.25rem;
    margin-bottom: 1.5rem;
  }

  .closing {
    padding: 1.5rem;
  }
}
</style> 