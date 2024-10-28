<template>

  <div class="banner ">

    <div class="slider" :style="{ '--quantity': images.length }">
      <div @click="focusElement(image.id)" v-for="(image, index) in images" :key="image.id" class="item"
        :style="{ '--position': image.id }">


        <IndexHeroProjetCard :card="image" :selectedIndex="selectedIndex"></IndexHeroProjetCard>
      </div>
    </div>
  </div>
  <div id="rota">
    <!-- 
    <input type="number" v-model="rotationAngle">
    {{ targetIndex }} -->

  </div>
  <ToolsObserveScroll :threshold=0.1 element="banner"></ToolsObserveScroll>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useMyStore } from '~/stores/myStore.js';

import projets from '~/assets/data/projets.json';
const images = projets;
const myStore = useMyStore();

const props = defineProps({
  cover: Object,
});


let rotationAngle = ref(0);
const defaultSpeedMultiplier = 0.04;

const speedMultiplier = ref(defaultSpeedMultiplier);
const slider = ref();
const targetIndex = ref(null);
const selectedIndex = ref(0);




// Fonction pour gérer la rotation vers l'élément ciblé
const handleTargetRotation = (currentAngle, imageAngle, fastSpeedMultiplier, margeAngle) => {
  if (targetIndex.value || targetIndex.value == 0) {
    const targetAngle = targetIndex.value === 0 ? 0 : (targetIndex.value * imageAngle);
    if (
      (targetIndex.value !== 0 && targetAngle - fastSpeedMultiplier - margeAngle <= currentAngle
        && targetAngle + fastSpeedMultiplier + (imageAngle / 2) >= currentAngle) ||
      (targetIndex.value === 0 && 360 - fastSpeedMultiplier - margeAngle <= currentAngle
        && targetAngle + fastSpeedMultiplier + (imageAngle / 2) <= currentAngle)
    ) {
      targetIndex.value = null;
      speedMultiplier.value = defaultSpeedMultiplier;
    } else {
      speedMultiplier.value = fastSpeedMultiplier;
    }
  } else {
    speedMultiplier.value = defaultSpeedMultiplier;
  }
};

// Fonction pour mettre à jour l'élément situé devant
const updateSelectedIndex = (currentAngle, imageAngle, fastSpeedMultiplier, margeAngle) => {
  images.forEach((image) => {
    const imageTargetAngle = image.id * imageAngle;

    if (
      (image.id !== 0 && imageTargetAngle - fastSpeedMultiplier - margeAngle <= currentAngle + 15
        && imageTargetAngle + fastSpeedMultiplier + (imageAngle / 2) >= currentAngle) ||
      (image.id === 0 && 360 - fastSpeedMultiplier - margeAngle <= currentAngle
        && imageTargetAngle + fastSpeedMultiplier + (imageAngle / 2) <= currentAngle + 15)
    ) {
      const tmpIndex = selectedIndex.value;
      selectedIndex.value = image.id;
      if (tmpIndex != selectedIndex.value) {
        setTimeout(function () {

          myStore.refreshHoverCursor = true; //Refresh le hover du curseur

        }, 250); // 

      }
    }
  });
};

//Animation
const rotateSlider = () => {
  if (myStore.scrollY <= 300 && myStore.scrollY >= 1400) return;
  const imageAngle = 360 / images.length;
  const margeAngle = 5;
  const fastSpeedMultiplier = 10;
  const currentAngle = Math.abs(rotationAngle.value % 360);

  // Gérer la rotation vers l'élément ciblé
  handleTargetRotation(currentAngle, imageAngle, fastSpeedMultiplier, margeAngle);

  // Mise à jour de l'élément situé devant
  updateSelectedIndex(currentAngle, imageAngle, fastSpeedMultiplier, margeAngle);

  // Mise à jour de l'angle de rotation et du style du slider
  rotationAngle.value -= (360 / images.length) / 60 * speedMultiplier.value;
  slider.value.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(${rotationAngle.value}deg)`;

  // Boucle d'animation
  requestAnimationFrame(rotateSlider);
};


const focusElement = (index) => {
  targetIndex.value = index;

}






onMounted(() => {
  slider.value = document.querySelector('.slider');

  rotateSlider(); // Start the animation
});




</script>

<style scoped>
#rota {
  position: absolute;
  z-index: 50;
}

.banner {
  --translate: 400px;
  --slider-apparition: 0.5s;
  width: 0px;
  height: 0px;
  left: 0;
  text-align: center;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transition: top var(--slider-apparition) ease-in-out, left var(--slider-apparition) ease-in-out, height var(--slider-apparition) ease-in-out, width var(--slider-apparition) ease-in-out;
}

.banner.is-scrolled {
  height: 50%;
  width: 100%;
  transform-origin: center;
  top: 0%;
  left: 0%;
  padding: 20% 0;
  box-sizing: border-box;
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
  height: calc(var(--slider-width) * 1.5);
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




@media only screen and (min-width: 2399px) {
  .banner {
    --translate: 20vw;
  }

  .banner.is-scrolled .slider {

    --slider-width: calc(100% / 6);

  }
}

@media only screen and (max-width: 2400px) {
  .banner {
    --translate: 20vw;
  }
}


@media only screen and (max-width: 2000px) {
  .banner {
    --translate: 30vw;
  }
}


@media only screen and (max-width: 1400px) {
  .banner {
    --translate: 350px;
  }
}

@media only screen and (max-width: 1024px) {
  .banner {
    --translate: 300px;
  }

  .banner.is-scrolled .slider {

    --slider-width: calc(150% / 5);
    width: var(--slider-width);
    height: calc(var(--slider-width) * 1.5);

  }
}

@media only screen and (max-width: 768px) {
  .banner {
    --translate: 200px;
  }
}

@media only screen and (max-width: 480px) {
  .banner {
    --translate: 130px;
  }

  .banner.is-scrolled .slider {

    --slider-width: calc(150% / 5);
    width: var(--slider-width);
    height: calc(var(--slider-width) * 1.5);

  }
}
</style>
