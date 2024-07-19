<template>

<button class="theme-toggle " :class="{'theme-toggle--toggled':theme=='dark'}" @click="switchTheme()" title="Toggle theme">
  
  <span class="theme-toggle-sr">Toggle theme</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    height="auto"
    width="100%"
    class="theme-toggle__simple"
    viewBox="0 0 32 32"
  >
    <clipPath id="theme-toggle__simple__cutout">
      <path d="M0-5h55v37h-55zm32 12a1 1 0 0025 0 1 1 0 00-25 0" />
    </clipPath>
    <g clip-path="url(#theme-toggle__simple__cutout)">
      <circle cx="16" cy="16" r="15" />
    </g>
  </svg>
</button>
</template>

<script setup>
import { useMyStore } from '~/stores/myStore.js';
const myStore=useMyStore();

const theme = ref('dark');

const switchTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme.value);
};

onMounted(() => {
  document.documentElement.setAttribute('data-theme', theme.value);
});
useHead({
  link: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/theme-toggles@4.10.1/css/simple.min.css' }]
})


        
</script>

<style scoped>

.theme-toggle{
 width: 25px;
 cursor: none;
}

.theme-toggle__simple{
    fill:var(--second-color);
}
        
</style>