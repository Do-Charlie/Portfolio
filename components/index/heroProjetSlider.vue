<template>

  <div class="banner " :class="{ 'is-scrolled': myStore.scrollY > 300 && myStore.scrollY < 1400 }">
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
const selectedIndex=ref(0);




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
      const tmpIndex= selectedIndex.value;
      selectedIndex.value = image.id;
      if(tmpIndex!=selectedIndex.value){
        setTimeout(function (){
  
          myStore.refreshHoverCursor=true; //Refresh le hover du curseur
            
}, 250); // 

      }
    }
  });
};

//Animation
const rotateSlider = () => {
  if(myStore.scrollY <= 300 && myStore.scrollY >= 1400) return;
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


const images = [
  {
    id:0,
    src: "/slider_projet/valeos.webp",
    title: "Valeos",
    alt: "Description de l'image 1",
    tags:['Vitrine','Energies','Nuxt'],
    link:'/projets/valeos'
  },
  {
    id:1,
    src: "/slider_projet/viaresp.webp",
    title: "Viaresp",
    alt: "Description de l'image AFFEZA",
    tags:['Site','Viager','Nuxt'],
    link:'/projets/viaresp'

  },
  {
    id:2,
    src: "/slider_projet/topgameserver.webp",
    title: "VPS",
    alt: "Description de l'image 3",
    tags:['Site','Serveurs','Nuxt'],
    link:'/projets/topgameserver'

  },
  {
    id:3,
    src: "/slider_projet/niceweb.webp",
    title: "NiceWeb",
    alt: "Description de l'image 4",
    tags:['ERP','Interne','PHP'],
    link:'/projets/niceweb',


  },
  {
    id:4,
    src: "/slider_projet/planning.webp",
    title: "Rplanning",
    alt: "Application de plannification d'équipe pour Rcarré",
    tags:['Application','Planning','Laravel'],
    link:'/projets/rcarre'

  },
  {
    id:5,
    src: "/slider_projet/portfolio.webp",
    title: "Portfolio",
    alt: "Description de l'image 6",
    tags:['Vitrine','Portfolio','Nuxt'],
    link:'/projets/portfolio'


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
