<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-help">
        <h2>How can we help you today?</h2>
        <div class="footer-buttons">
          <button class="footer-btn">VIEW PRICING</button>
          <button class="footer-btn">LEARN MORE</button>
          <button class="footer-btn">SEE LOCATIONS</button>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} KTH Property. All rights reserved.</p>
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
  background-color: #0071BC; /* Updated blue */
  color: white;
  padding: 1rem 0 1rem 0;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-help {
  text-align: center;
  margin-bottom: 2rem;
}

.footer-help h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 300;
  color: white;
}

.footer-buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.footer-btn {
  background-color: #e5e7eb;
  color: #0071BC; /* Updated blue */
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.footer-btn:hover {
  background-color: white;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
