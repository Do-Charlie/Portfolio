<template>
  <div class="container hero">
    <div class="content-hero">
      <nav>
        <NuxtLink class="linear" to="#"> Développeur</NuxtLink>
        <NuxtLink class="linear" to="#"> Front end</NuxtLink>
        <NuxtLink class="linear" to="#"> Back end</NuxtLink>


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
  display:flex;
  flex-flow: column;
  gap: 200px;
  padding-top: 350px;

}

.content-hero nav {
  display: flex;
  flex-direction: column;
  font-size: 60px;
  font-weight: 100;
  gap: 30px;
  text-transform: uppercase;
  padding-left: 15vw;

}

.slider-projet{
  width: 100%;
  height: 700px;
  display:flex;
  align-items: center;
  position: relative;
}
</style>