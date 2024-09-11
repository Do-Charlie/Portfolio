<template>

  <div class="banner " :class="{ 'is-scrolled': myStore.scrollY > 300 && myStore.scrollY < 1400 }">
    <div class="slider" :style="{ '--quantity': images.length }">
      <div @click="focusElement(index)" v-for="(image, index) in images" :key="index" class="item pointer"
        :style="{ '--position': index }">


        <IndexHeroProjetCard :card="image"></IndexHeroProjetCard>
      </div>
    </div>
  </div>
  <div id="rota">
<!-- 
    <input type="number" v-model="rotationAngle">
    {{ targetIndex }} -->

  </div>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useMyStore } from '~/stores/myStore.js';

const myStore = useMyStore();

const props = defineProps({
  cover: Object,
});


let rotationAngle = ref(0);
const defaultSpeedMultiplier = 0.02;

const speedMultiplier = ref(defaultSpeedMultiplier);
const slider = ref();
const targetIndex = ref(null);


const rotateSlider = () => {
  const fastSpeedMultiplier=10;
  const imageAngle=360/images.length;
  const margeAngle=5;
  if (targetIndex.value || targetIndex.value == 0) {
    const targetAngle = targetIndex.value === 0 ? 0 : (targetIndex.value * imageAngle);
    const currentAngle = Math.abs(rotationAngle.value % 360);
    if ((targetIndex.value!=0 && targetAngle - fastSpeedMultiplier - margeAngle <= currentAngle 
    && targetAngle + fastSpeedMultiplier + (imageAngle/2) >= currentAngle) 
    || (targetIndex.value==0) && 360 - fastSpeedMultiplier - margeAngle <= currentAngle 
    && targetAngle + fastSpeedMultiplier + (imageAngle/2) <=currentAngle) {

      // speedMultiplier.value = 0;
      targetIndex.value = null;
      speedMultiplier.value=defaultSpeedMultiplier;


    } else {
      speedMultiplier.value = fastSpeedMultiplier;


    }
  } else {
      speedMultiplier.value=defaultSpeedMultiplier;

  }
  rotationAngle.value -= (360 / images.length) / 60 * speedMultiplier.value / 1;

  slider.value.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(${rotationAngle.value}deg)`;


  requestAnimationFrame(rotateSlider);
};

const focusElement = (index) => {
  targetIndex.value = index;

}
onMounted(() => {
  slider.value = document.querySelector('.slider');

  rotateSlider(); // Start the animation

});


const images = [
  {
    src: "/slider_projet/valeos.jpg",
    title: "Valeos",
    alt: "Description de l'image 1"
  },
  {
    src: "/slider_projet/viaresp.webp",
    title: "Viaresp",
    alt: "Description de l'image AFFEZA"
  },
  {
    src: "/slider_projet/topgameserver.jpg",
    title: "Top-Game-Server",
    alt: "Description de l'image 3"
  },
  {
    src: "/slider_projet/niceweb.jpg",
    title: "NiceWeb",
    alt: "Description de l'image 4"
  },
  {
    src: "/slider_projet/planning.jpg",
    title: "Rplanning",
    alt: "Application de plannification d'équipe pour Rcarré"
  },
  {
    src: "/slider_projet/portfolio.jpg",
    title: "Projet 6",
    alt: "Description de l'image 6"
  }
];




</script>

<style scoped>
#rota {
  position: absolute;
  z-index: 50;
}

.banner {
  --translate: 400px;

  width: 0px;
  height: 0px;
  left: 0;
  text-align: center;
  overflow: hidden;
  position: absolute;
  filter: brightness(60%);
  top: 50%;
  transition: top 1s ease-in-out, left 1s ease-in-out, height 1s ease-in-out, width 1s ease-in-out;
}

.banner.is-scrolled {
  height: 100%;
  width: 100%;
  top: 10%;
  left: 0%;
}

.banner .slider {
  --duration-slider: 90s;
  --speed-multiplier: 1;
  position: absolute;
  width: 0px;
  height: 0px;
  left: calc(50%);
  transform-style: preserve-3d;
  transform: perspective(1000px);
  transition: left 1s ease-in-out, height 1s ease-in-out, width 1s ease-in-out;
}

.banner.is-scrolled .slider {
  width: 300px;
  height: 200px;
  --slider-width: calc(100% / 5);
  top: 10%;
  width: var(--slider-width);
  height: calc(var(--slider-width));
  left: calc(50% - var(--slider-width) / 2);
}

.banner .slider .item {
  position: absolute;
  inset: 0 0 0 0;
  transition: transform 1s ease-in-out;
}

.banner.is-scrolled .slider .item {
  transform: rotateY(calc((var(--position)) * (360 / var(--quantity)) * 1deg)) translateZ(var(--translate));
}






@media only screen and (min-width: 2000px) {
  .banner {
    --translate: 500px;
  }
}


@media only screen and (max-width: 1400px) {
  .banner {
    --translate: 400px;
  }
}

@media only screen and (max-width: 1024px) {
  .banner {
    --translate: 300px;
  }
}

@media only screen and (max-width: 768px) {
  .banner {
    --translate: 200px;
  }
}

@media only screen and (max-width: 480px) {
  .banner {
    --translate: 100px;
  }
}
</style>
