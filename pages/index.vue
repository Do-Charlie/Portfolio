<template>
    <div class="page-container">
    <IndexHeroBanner></IndexHeroBanner>
    <div   class="slider-projet"  >
      <div id="projets" class="anchor-projets">

      </div>
      <!-- <BackgroundPopSquare ></BackgroundPopSquare> -->
      <!-- Preload toutes les banieres -->
      <div style="display:none">
      <NuxtImg
        v-for="(project, index) in projects"
        :key="index"
        :src="project.banner.src"
        preload
        alt="Preload project banner"
      />
    </div>
    <IndexHeroProjetSlider></IndexHeroProjetSlider>
  </div>
    <div class="test">
 <input type="text">
</div>
    <IndexAnimation></IndexAnimation>

    </div>

</template>


<script setup>

import { useMyStore } from '~/stores/myStore.js';
const myStore=useMyStore();

import projets from '~/assets/data/projets.json';
const projects = projets;

// onMounted(() => {
//     window.scrollTo(0, 0);
//   });
</script>

<style scoped>

/* Define a transition duration during page visits */
html.is-changing .transition-fade {
  transition: opacity 0.25s;
  opacity: 1;
}
/* Define the styles for the unloaded pages */
html.is-animating .transition-fade {
  opacity: 0;
}
.page-container{
    /* scroll-behavior: smooth; */
    position: relative;
}

.slider-projet {
  width: 100%;
    height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
}
.anchor-projets{
  position: absolute;
  top: -25%;
}

.test{
    min-height: 200vh;
}
.page-enter-from,.page-leave-to{
  transform: translateX(-100%);

}






</style>