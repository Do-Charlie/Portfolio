<template>
  <div class="container hero">
    <div class="content-hero">
      <nav>
        <NuxtLink class="linear" to="#"> Développeur Web</NuxtLink>
        <NuxtLink class="linear" to="#"> Stacks</NuxtLink>
        <NuxtLink class="linear" to="#"> Projets</NuxtLink>


      </nav>
    

      <div class="slider-projet">
      <IndexHeroProjetSlider></IndexHeroProjetSlider>
    </div>

    </div>

    <div class="discover linear" :class="{ 'hide': myStore.scrollY > 100 }">Scroll</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import { useMyStore } from '~/stores/myStore.js';
const myStore = useMyStore();


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

.content-hero {
  padding-left: 15vw;
  display:flex;
  flex-flow: row nowrap;
  gap: 200px;
  padding-top: 400px;

}

.content-hero nav {
  display: flex;
  flex-direction: column;
  font-size: 60px;
  font-weight: 100;
  gap: 30px;
  text-transform: uppercase;
}

.slider-projet{
  width: 100%;
  display:flex;
  align-items: center;
}
</style>