<template>
  <div class="home">
    <div class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1>
            Property Management
            <span class="subtitle">without the stress</span>
          </h1>
          <p class="tagline">We handle everything. You get the rent check.</p>
          
          <ul class="benefits">
            <li><span class="check">✓</span> Best-in-class tenant screening</li>
            <li><span class="check">✓</span> Local experts on the ground</li>
            <li><span class="check">✓</span> Freedom to manage your property 100% remotely</li>
            <li><span class="check">✓</span> Save $2,500/year on avg. compared to other firms</li>
          </ul>

          <div class="testimonial">
            <p class="quote">"KTH is the best management company out there.  They are so responsive and helpful.  I would highly recommend them to anyone."</p>
            <div class="source">
              <img src="@/assets/home1.jpg" alt="Home" class="homes-logo" />
              <div class="stars">★★★★★</div>
            </div>
          </div>
        </div>
        
        <div class="hero-image">
          <img src="@/assets/home1.jpg" alt="Modern Property" class="property-img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.hero {
  background-color: white;
  padding: 4rem 0;
  flex: 1;
}

.hero-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  gap: 6rem;
  align-items: center;
}

.hero-text {
  flex: 0.8;
  max-width: 500px;
}

h1 {
  font-size: 3.5rem;
  color: #0071BC; /* Updated blue */
  margin-bottom: 1rem;
  line-height: 1.2;
}

.subtitle {
  color: #0071BC; /* Updated blue */
  font-style: italic;
  display: block;
  font-size: 2.5rem;
}

.tagline {
  font-size: 1.5rem;
  color: #4b5563;
  margin-bottom: 2rem;
}

.benefits {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.benefits li {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #1f2937;
}

.check {
  color: #0071BC; /* Updated blue */
  margin-right: 0.5rem;
  font-weight: bold;
}

.testimonial {
  background-color: #f8fafc;
  padding: 2rem;
  border-radius: 8px;
}

.quote {
  font-style: italic;
  color: #1f2937;
  margin-bottom: 1rem;
}

.source {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.homes-logo {
  height: 30px;
}

.stars {
  color: #0071BC; /* Updated blue */
}

.hero-image {
  flex: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.property-img {
  max-width: 100%;
  min-width: 600px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1200px) {
  .property-img {
    min-width: auto;
  }
}

@media (max-width: 768px) {
  .hero-content {
    flex-direction: column-reverse;
  }

  .hero-image {
    width: 100%;
  }

  h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 2rem;
  }
}
</style>