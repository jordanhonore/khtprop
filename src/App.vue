<template>
  <div id="app">
    <NavBar />
    <main>
      <router-view></router-view>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    AppFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap');

:root {
  /* KTH Brand Colors */
  --kth-primary: #0071BC;
  --kth-primary-dark: #005a96;
  --kth-primary-light: #e6f3fb;
  --kth-secondary: #1a1a2e;
  --kth-accent: #00a8e8;

  /* Neutrals */
  --kth-black: #0f0f0f;
  --kth-gray-900: #1a1a1a;
  --kth-gray-800: #2d2d2d;
  --kth-gray-700: #404040;
  --kth-gray-600: #525252;
  --kth-gray-500: #6b6b6b;
  --kth-gray-400: #a3a3a3;
  --kth-gray-300: #d4d4d4;
  --kth-gray-200: #e5e5e5;
  --kth-gray-100: #f5f5f5;
  --kth-white: #ffffff;

  /* Gradients */
  --kth-gradient-primary: linear-gradient(135deg, #0071BC 0%, #00a8e8 100%);
  --kth-gradient-dark: linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%);
  --kth-gradient-hero: linear-gradient(180deg, rgba(0,113,188,0.05) 0%, rgba(255,255,255,0) 100%);

  /* Shadows */
  --kth-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --kth-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --kth-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --kth-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --kth-shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --kth-shadow-card: 0 4px 24px rgba(0, 113, 188, 0.08);
  --kth-shadow-card-hover: 0 12px 40px rgba(0, 113, 188, 0.15);

  /* Border Radius */
  --kth-radius-sm: 6px;
  --kth-radius-md: 10px;
  --kth-radius-lg: 16px;
  --kth-radius-xl: 24px;
  --kth-radius-full: 9999px;

  /* Transitions */
  --kth-transition-fast: 150ms ease;
  --kth-transition-base: 250ms ease;
  --kth-transition-slow: 350ms ease;

  /* Typography */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-display: 'Playfair Display', Georgia, serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  color: var(--kth-gray-800);
  background-color: var(--kth-white);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Typography Utilities */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
  color: var(--kth-gray-900);
}

/* Button Base Styles */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  font-family: var(--font-sans);
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: var(--kth-radius-md);
  border: none;
  cursor: pointer;
  transition: all var(--kth-transition-base);
}

.btn-primary {
  background: var(--kth-gradient-primary);
  color: var(--kth-white);
  box-shadow: 0 4px 14px rgba(0, 113, 188, 0.35);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 113, 188, 0.45);
}

.btn-secondary {
  background: var(--kth-white);
  color: var(--kth-primary);
  border: 2px solid var(--kth-primary);
}

.btn-secondary:hover {
  background: var(--kth-primary);
  color: var(--kth-white);
}

.btn-dark {
  background: var(--kth-gray-900);
  color: var(--kth-white);
}

.btn-dark:hover {
  background: var(--kth-black);
  transform: translateY(-2px);
}

/* Animation Keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Utility Classes */
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease forwards;
}

.animate-fade-in {
  animation: fadeIn 0.6s ease forwards;
}

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}

/* Selection Color */
::selection {
  background: var(--kth-primary);
  color: var(--kth-white);
}
</style>