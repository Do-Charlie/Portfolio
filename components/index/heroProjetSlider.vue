<template>
  <div class="banner" :class="{ 'is-scrolled': myStore.scrollY > 300 }">
    <div class="slider" :style="{ '--quantity': images.length }">
   
      <div v-for="(image, index) in images" :key="index" class="item" :style="{ '--position': index + 1 }">
        <NuxtImg :src="image.src" :alt="image.alt" />
      </div>
      <div v-if="myStore.scrollY <=300"  :key="0" class="item" :style="{ '--position':  images.length + 1 }">
        <NuxtImg src="/slider_projet/0.jpg" alt="image.alt" />
      </div>  
    </div>
  </div>


</template>



<style scoped>
.banner {
  width: 50%;
  height: 450px;
  text-align: center;
  overflow: hidden;
  position: absolute;
  filter: brightness(60%);
  top: -55vh;
  right: 5%;
  transition: top 1s ease-in-out, right 1s ease-in-out, height 1s ease-in-out, width 1s ease-in-out;
}

.banner.is-scrolled {
  top: 0;
  right: 0;
  height: 700px;
  width: 100%;



}

.banner .slider {
  --duration-slider: 40s;
  position: absolute;
  width: 300px;
  height: 200px;
  top: 10%;
  /* left: calc(50% + 600px); */
  left: calc(50% - 75px);

  transform-style: preserve-3d;
  transform: perspective(1000px);
  animation: autoRun var(--duration-slider) linear infinite;
  transition: left 1s ease-in-out, height 1s ease-in-out, width 1s ease-in-out;

}
.banner.is-scrolled .slider{

  width: 300px;
  height: 200px;
  left: calc(50% - 150px);

}

@keyframes autoRun {
  from {
    transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
  }

  to {
    transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);

  }
}

.banner .slider .item {
  position: absolute;
  inset: 0 0 0 0;
  transform:
    rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ();

  transition: transform 1s ease-in-out;

}

.banner.is-scrolled .slider .item {
  transform:
    rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(500px);
}

.banner .slider .item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  border: 1px var(--second-color) solid;
  transition: transform 0.2s ease-in-out;

}
.banner.is-scrolled .slider .item img {
}

.banner.is-scrolled .slider .item img:hover {

  border: 1px var(--main-color) solid;
  transform: scale(1.02);

}
</style>

<script setup>
import { ref,watchEffect ,watch} from 'vue';
import { useMyStore } from '~/stores/myStore.js';
const myStore = useMyStore();

// watchEffect(() => {
//   console.log('watchEffect is running');
// });





const images =[
  {
    src: "/slider_projet/1.jpg",
    title: "Projet 1",
    alt: "Description de l'image 1"
  },
  {
    src: "/slider_projet/2.jpeg",
    title: "Projet 2",
    alt: "Description de l'image AFFEZA"
  },
  {
    src: "/slider_projet/3.jpg",
    title: "Projet 3",
    alt: "Description de l'image 3"
  },
  {
    src: "/slider_projet/4.jpg",
    title: "Projet 4",
    alt: "Description de l'image 4"
  },
  {
    src: "/slider_projet/5.jpg",
    title: "Projet 5",
    alt: "Description de l'image 5"
  },
  {
    src: "/slider_projet/6.jpg",
    title: "Projet 6",
    alt: "Description de l'image 6"
  }
];

</script>