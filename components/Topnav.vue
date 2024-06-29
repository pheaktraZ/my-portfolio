<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" to="/">SOPHEKTRA</NuxtLink>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="item in navItems" :key="item.text">
              <NuxtLink class="nav-link" :to="item.link">{{ item.text }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Define an array of navigation items
  const navItems = ref([
    { text: 'Home', link: '/' },
    { text: 'Work', link: '/work' },
    { text: 'About', link: '/about' },
    { text: 'Contact', link: '/contact' }
  ])

  </script>
  
  <style scoped>
  .navbar {
    padding: 20px 0;
  }

  .navbar-brand {
    color: #8A2BE2; /* Your desired color */
    font-weight: bold;
    text-decoration: none;
  }
  .nav-link {
    color: #696969; /* Your desired color */
    text-decoration: none;
  }
  .nav-link:hover {
    color: #8A2BE2; /* Hover color */
  }
  </style>
  