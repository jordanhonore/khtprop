<template>
    <nav class="navbar">
      <div class="navbar-content">
        <router-link to="/" class="logo-container">
          <img src="@/assets/KTHKeyLogo.png" alt="KTH Property Logo" class="logo">
        </router-link>
        
        <div class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/announcements">Announcements</router-link>
          <router-link to="/information">Information</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>

        <div class="portal-button">
          <a href="https://app.doorloop.com/auth/login" class="login-btn">Resident Portal Login</a>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style scoped lang="scss">
  .navbar {
    background-color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .navbar-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo-container {
    text-decoration: none;
  }
  
  .logo {
    height: 60px; /* Increased from 40px */
    width: auto;
  }
  
  .nav-links {
    display: flex;
    gap: 2rem;
    
    a {
      color: black;
      text-decoration: none;
      font-weight: bold;
      
      &:visited, &:active, &:link {
        color: black;
      }
      
      &:hover {
        opacity: 0.8;
      }
    }
  }
  
  .portal-button {
    .login-btn {
      background-color: #0071BC;
      color: white;
      padding: 0.5rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 600;
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.9;
      }
    }
  }
  
  @media (max-width: 768px) {
    .navbar-content {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
  }
  </style>