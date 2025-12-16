<template>
  <div class="faq-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-pattern"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge">Got Questions?</span>
          <h1>Frequently Asked <span class="text-accent">Questions</span></h1>
          <p class="hero-description">
            Find answers to common questions from property owners and tenants.
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>
      </div>
    </section>

    <!-- Tab Navigation -->
    <section class="tab-section">
      <div class="container">
        <div class="tab-navigation">
          <button
            :class="['tab-button', { active: activeTab === 'owners' }]"
            @click="activeTab = 'owners'"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            For Property Owners
          </button>
          <button
            :class="['tab-button', { active: activeTab === 'tenants' }]"
            @click="activeTab = 'tenants'"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            For Tenants
          </button>
        </div>
      </div>
    </section>

    <!-- FAQ Content -->
    <section class="faq-content">
      <div class="container">
        <!-- Owner FAQs -->
        <div v-show="activeTab === 'owners'" class="faq-list">
          <div
            v-for="(faq, index) in ownerFaqs"
            :key="'owner-' + index"
            class="faq-item"
            :class="{ open: openFaq === 'owner-' + index }"
          >
            <button class="faq-question" @click="toggleFaq('owner-' + index)">
              <span class="question-text">{{ faq.question }}</span>
              <span class="faq-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </span>
            </button>
            <div class="faq-answer">
              <div class="answer-content" v-html="faq.answer"></div>
            </div>
          </div>
        </div>

        <!-- Tenant FAQs -->
        <div v-show="activeTab === 'tenants'" class="faq-list">
          <div
            v-for="(faq, index) in tenantFaqs"
            :key="'tenant-' + index"
            class="faq-item"
            :class="{ open: openFaq === 'tenant-' + index }"
          >
            <button class="faq-question" @click="toggleFaq('tenant-' + index)">
              <span class="question-text">{{ faq.question }}</span>
              <span class="faq-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </span>
            </button>
            <div class="faq-answer">
              <div class="answer-content" v-html="faq.answer"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Still Have Questions?</h2>
          <p>Our team is here to help. Reach out and we'll get back to you as soon as possible.</p>
          <div class="cta-buttons">
            <router-link to="/contact" class="btn btn-light">
              Contact Us
            </router-link>
            <a href="tel:281-241-6902" class="btn btn-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call (281) 241-6902
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FAQView',
  data() {
    return {
      activeTab: 'owners',
      openFaq: null,
      ownerFaqs: [
        {
          question: 'Can I choose to disallow service animals, smokers, or large families?',
          answer: '<p>We fully comply with the Fair Housing Act, which prohibits discrimination against members of protected classes. While you may choose to prohibit pets and disallow smoking in your property, service animals cannot be denied under federal law.</p>'
        },
        {
          question: 'Why should I hire a professional property manager?',
          answer: `<p>There are several advantages to professional management versus self-management:</p>
            <ul>
              <li>We enforce rent collection and issue notices when tenants fail to pay.</li>
              <li>We handle maintenance requests and emergency repairs, so you can rest easy.</li>
              <li>Our deep knowledge of the local rental market and access to discounted advertising rates help us rent your property faster.</li>
              <li>We stay current on all federal, state, and local laws, protecting you and your investment from legal issues.</li>
              <li>By maximizing rental income and minimizing costs, many owners earn more through professional management than they would managing on their own.</li>
            </ul>`
        },
        {
          question: 'What happens if a tenant moves out before the lease ends?',
          answer: '<p>If a tenant vacates before their lease term ends, they remain responsible for rent until the property is re-leased. We will immediately begin marketing the property to secure a new tenant as quickly as possible. The departing tenant is charged for advertising and re-letting costs.</p>'
        },
        {
          question: 'Should I allow tenants with pets?',
          answer: `<p>We generally recommend evaluating pets on a case-by-case basis. You can set limits on the number, size, or breed of pets allowed. If you choose to allow pets, we suggest collecting a non-refundable and/or refundable pet deposit in addition to the security deposit.</p>
            <p class="note"><strong>Note:</strong> Keep in mind that around half of all prospective tenants have pets, so restricting them could reduce your potential renter pool by 50%.</p>`
        },
        {
          question: 'How are maintenance requests handled?',
          answer: `<ul>
              <li>For non-emergency repairs over $250, we'll contact you for approval before proceeding.</li>
              <li>For repairs under $250 that are required under the lease, we'll take care of them promptly and efficiently.</li>
              <li>In the rare case of an emergency where we cannot reach you, we will use our best judgment to address the issue and prevent further damage to your property.</li>
            </ul>`
        },
        {
          question: 'How is monthly rent determined?',
          answer: '<p>One of our experienced property managers will conduct a market analysis of your property to help you determine a competitive and fair rental rate based on local market trends and comparable listings.</p>'
        },
        {
          question: 'When will I receive my rental income?',
          answer: '<p>Owner payments are processed by the beginning of every month via direct deposit. You\'ll also receive an itemized monthly statement showing all income and expenses related to your property.</p>'
        },
        {
          question: 'Will I receive updates or reports on my property?',
          answer: '<p>Yes. You\'ll receive a monthly management report detailing rent payments, maintenance, repairs, and any expenses related to your property. Reports are issued by the beginning of each month. If you ever have questions about your statement, our team is always available to assist.</p>'
        },
        {
          question: 'How am I protected if a tenant damages my property?',
          answer: `<p>All tenants pay a refundable security deposit at move-in, which typically covers minor damages. Tenants with strong credit and references rarely cause significant harm.</p>
            <p>If a tenant leaves owing rent or causes damage beyond the deposit, we bill the tenant for the balance. Unpaid amounts may be sent to collections for recovery.</p>`
        },
        {
          question: 'Do I need a rental license, and how do I get one?',
          answer: '<p>If your property is located in a city that requires a rental license, you must obtain and renew it annually. Each city sets its own fees and requirements. Our team handles all paperwork and coordination for you, including arranging any necessary repairs. If your property is in an area that does not require a license, you are exempt.</p>'
        }
      ],
      tenantFaqs: [
        {
          question: 'How much is the application fee?',
          answer: `<p>The application fee is $45 per adult and is non-refundable. Payments must be made in certified funds—cash, cashier's check, or money order payable to Key To Home Property Management—or via online payment through our website.</p>
            <p>Each applicant undergoes a comprehensive background check, which includes verification of rental history, employment, credit report, personal references, and a review of any criminal records available through federal, state, or local agencies. This process ensures all applicants meet the qualifications for tenancy.</p>`
        },
        {
          question: 'Does your office have an after-hours drop box?',
          answer: '<p>No, we do not have an after-hours drop box. All rent payments or documents must be submitted during regular business hours.</p>'
        },
        {
          question: 'How long does it take to process my application?',
          answer: '<p>Applications are reviewed once the application fee and a completed application form have been received. Processing typically takes about 2 business days. If any additional information is needed—or once your application is approved or denied—your property manager will contact you directly.</p>'
        },
        {
          question: "I didn't have a pet when I moved in. Can I get one now?",
          answer: '<p>Please email your Property Manager before bringing any pet into the property. Do not move a pet in without written approval. Once we receive your request, Key To Home Property Management will contact the property owner for authorization. If approved, a pet deposit will be required prior to move-in.</p>'
        },
        {
          question: 'Are pets allowed?',
          answer: '<p>Pet policies vary by property and are determined by the owner. Certain dog breeds may be restricted, and penalties will apply if a pet is brought in without prior disclosure. Always notify our office before bringing a pet onto the property.</p>'
        },
        {
          question: 'How long is the lease term?',
          answer: '<p>Lease agreements are typically for 12 to 24 months. We do not accept short-term leases, except in cases where an existing lease is being extended.</p>'
        },
        {
          question: 'How can I ensure I receive my full security deposit refund when moving out?',
          answer: `<p>To maximize your refund:</p>
            <ul>
              <li>Remove all personal belongings.</li>
              <li>Repair any damages using a licensed contractor approved by Key To Home Property Management.</li>
              <li>Professionally clean the entire property, including floors, walls, windows, cabinets, appliances, and bathrooms.</li>
              <li>Mow the grass, trim hedges, and remove weeds from flower beds.</li>
              <li>Ensure gutters are clean and the roof is free of debris.</li>
              <li>Shampoo all carpets.</li>
            </ul>
            <p class="note"><strong>Note:</strong> The property must be returned in the same condition as at move-in, except for normal wear and tear.</p>`
        }
      ]
    }
  },
  methods: {
    toggleFaq(id) {
      this.openFaq = this.openFaq === id ? null : id
    }
  }
}
</script>

<style scoped>
.faq-page {
  padding-top: 80px;
}

/* Hero Section */
.page-hero {
  position: relative;
  padding: 5rem 0;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: var(--kth-gradient-primary);
  opacity: 0.08;
}

.hero-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 1px 1px, var(--kth-primary) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.1;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
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
}

.page-hero h1 {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--kth-gray-900);
}

.text-accent {
  background: var(--kth-gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--kth-gray-600);
  line-height: 1.7;
}

/* Tab Section */
.tab-section {
  background: var(--kth-white);
  padding: 2rem 0;
  border-bottom: 1px solid var(--kth-gray-200);
  position: sticky;
  top: 80px;
  z-index: 10;
}

.tab-navigation {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.tab-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--kth-gray-100);
  color: var(--kth-gray-600);
  border: 2px solid transparent;
  font-size: 1rem;
  font-weight: 600;
  border-radius: var(--kth-radius-full);
  cursor: pointer;
  transition: all var(--kth-transition-base);
}

.tab-button:hover {
  background: var(--kth-primary-light);
  color: var(--kth-primary);
}

.tab-button.active {
  background: var(--kth-primary);
  color: var(--kth-white);
  border-color: var(--kth-primary);
}

.tab-button.active svg {
  stroke: var(--kth-white);
}

/* FAQ Content */
.faq-content {
  padding: 4rem 0;
  background: var(--kth-gray-100);
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: var(--kth-white);
  border-radius: var(--kth-radius-lg);
  margin-bottom: 1rem;
  box-shadow: var(--kth-shadow-card);
  overflow: hidden;
  transition: all var(--kth-transition-base);
}

.faq-item:hover {
  box-shadow: var(--kth-shadow-lg);
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 1rem;
}

.question-text {
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--kth-gray-900);
  flex: 1;
}

.faq-icon {
  width: 36px;
  height: 36px;
  background: var(--kth-gray-100);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--kth-primary);
  transition: all var(--kth-transition-base);
  flex-shrink: 0;
}

.faq-item.open .faq-icon {
  background: var(--kth-primary);
  color: var(--kth-white);
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-item.open .faq-answer {
  max-height: 1000px;
}

.answer-content {
  padding: 0 1.5rem 1.5rem;
  border-top: 1px solid var(--kth-gray-100);
  padding-top: 1.5rem;
}

.answer-content p {
  font-size: 0.9375rem;
  color: var(--kth-gray-600);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.answer-content p:last-child {
  margin-bottom: 0;
}

.answer-content ul {
  margin: 0 0 1rem 0;
  padding-left: 1.5rem;
}

.answer-content li {
  font-size: 0.9375rem;
  color: var(--kth-gray-600);
  line-height: 1.7;
  margin-bottom: 0.5rem;
}

.answer-content li:last-child {
  margin-bottom: 0;
}

.answer-content .note {
  background: var(--kth-primary-light);
  padding: 1rem;
  border-radius: var(--kth-radius-md);
  border-left: 3px solid var(--kth-primary);
  color: var(--kth-gray-700);
}

/* CTA Section */
.cta-section {
  background: var(--kth-gradient-primary);
  padding: 5rem 0;
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--kth-white);
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-light {
  background: var(--kth-white);
  color: var(--kth-primary);
  padding: 0.875rem 1.75rem;
  font-weight: 600;
  border-radius: var(--kth-radius-md);
  text-decoration: none;
  transition: all var(--kth-transition-base);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-light:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-outline {
  background: transparent;
  color: var(--kth-white);
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 0.875rem 1.75rem;
  font-weight: 600;
  border-radius: var(--kth-radius-md);
  text-decoration: none;
  transition: all var(--kth-transition-base);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-outline:hover {
  background: var(--kth-white);
  color: var(--kth-primary);
  border-color: var(--kth-white);
}

/* Responsive */
@media (max-width: 768px) {
  .page-hero {
    padding: 3rem 0;
  }

  .page-hero h1 {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1.125rem;
  }

  .tab-section {
    padding: 1.5rem 0;
  }

  .tab-navigation {
    flex-direction: column;
    gap: 0.75rem;
  }

  .tab-button {
    justify-content: center;
    padding: 0.875rem 1.5rem;
  }

  .faq-content {
    padding: 2.5rem 0;
  }

  .faq-question {
    padding: 1.25rem;
  }

  .question-text {
    font-size: 1rem;
  }

  .answer-content {
    padding: 0 1.25rem 1.25rem;
    padding-top: 1.25rem;
  }

  .cta-section {
    padding: 3.5rem 0;
  }

  .cta-content h2 {
    font-size: 1.75rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn-light,
  .btn-outline {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}
</style>
