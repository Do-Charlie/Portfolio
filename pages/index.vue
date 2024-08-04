<template>
    <div class="page-container">
        <IndexHeader></IndexHeader>
    <IndexHeroBanner></IndexHeroBanner>
    <div class="slider-projet" id="projets">
      <BackgroundPopSquare ></BackgroundPopSquare>

    <IndexHeroProjetSlider></IndexHeroProjetSlider>
  </div>
    <div class="test">
azef <input type="text">
</div>
    <IndexAnimation></IndexAnimation>

    </div>

</template>


<script setup>

import { useMyStore } from '~/stores/myStore.js';
const myStore=useMyStore();

onMounted(() => {
    window.scrollTo(0, 0);
  });
</script>

<style scoped>
.page-container{
    scroll-behavior: smooth;
    position: relative;
}

.slider-projet {
  width: 100%;
    height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
}

.test{
    min-height: 200vh;
}




</style>