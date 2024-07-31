<template>
  <div :class="['flip-container', currentFlipClass]">
    <NuxtImg :src="currentImage.src" :alt="currentImage.alt" :key="currentImage.src" />
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const techs = ref([
{
    id:1,
    src: "/techs/nuxt.png",
    title: "Projet 1",
    alt: "Description de l'image 1"
  },
  {
    id:2,
    src: "/techs/vue.png",
    title: "Projet 2",
    alt: "Description de l'image AFFEZA"
  },
  {
    id:3,
    src: "/techs/laravel.png",
    title: "Projet 1",
    alt: "Description de l'image 1"
  },
  {
    id:4,
    src: "/techs/nodejs.webp",
    title: "Projet 2",
    alt: "Description de l'image AFFEZA"
  },
  {
    id:5,
    src: "/techs/php.png",
    title: "Projet 1",
    alt: "Description de l'image 1"
  },
]);

const currentImageIndex = ref(0);
const currentFlipClass = ref('');
const currentImage = ref(techs.value[currentImageIndex.value]);

const updateImageAndFlipClass = () => {
  currentFlipClass.value = 'flip-1';

      setTimeout(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % techs.value.length;
    currentImage.value = techs.value[currentImageIndex.value];
  }, 1000); // Duration of flip-1 animation

  setTimeout(() => {
    currentFlipClass.value = '';
  }, 2000); // Duration of both animations combined
};

const interval = ref(null);

onMounted(() => {
  interval.value = setInterval(updateImageAndFlipClass, 5000);
});

onUnmounted(() => {
  clearInterval(interval.value);
});
</script>


<style scoped>
img {
  width: 7vw;
  height: auto;
  fill: cover;
}

.flip-container {
  display: inline-block;
}

.flip-1 {
  -webkit-animation: flip-1 2s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
  animation: flip-1 2s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}



@-webkit-keyframes flip-1 {
  0% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
  }
  100% {
    -webkit-transform: rotateX(360deg);
    transform: rotateX(360deg);
  }
}

@keyframes flip-1 {
  0% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
  }
  50% {
    -webkit-transform: rotateX(90deg);
    transform: rotateX(90deg);
  }
  100% {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }
}


</style>
