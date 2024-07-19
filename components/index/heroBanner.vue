<template>
    <div class="container hero">
      <div class="discover linear" :class="{ 'hide': myStore.scrollY>100 }">Scroll</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  import { useMyStore } from '~/stores/myStore.js';
const myStore=useMyStore();

 
  </script>
  
  <style scoped>
  .hero {
    height: 100svh;
    position: relative;
  }
  
  .discover {
    position: absolute;
    display: flex;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
    bottom: 32px;
    text-transform: uppercase;
    font-weight: 100;
    transition: opacity var(--duration-opacity) ease-out;
  }
  


  .hide {
    opacity: 0;
  }
  </style>
  