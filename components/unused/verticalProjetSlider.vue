<template>
  <div class="banner">
    <div class="slider" :style="{ '--quantity': images.length }">
      <div v-for="(image, index) in images" :key="index" class="item" :style="{ '--position': index + 1 }">
        <NuxtImg :src="image.src" :alt="image.alt" />
      </div>
    </div>
  </div>


</template>



<style scoped>
.banner {
  width: 100%;
  height: 100lvh;
  text-align: center;
  overflow: hidden;
  position: relative;
}

.banner .slider {
  position: absolute;
  width: 300px;
  height: 200px;
  top: 10%;
  /* left: calc(50% + 600px); */
  left: calc(50% - 100px);

  transform-style: preserve-3d;
  transform: perspective(1000px);
  animation: autoRun 60s linear infinite;
}

@keyframes autoRun {
  from {
    transform: perspective(1000px) rotateX(360deg) rotateY(180deg);
  }

  to {
    transform: perspective(1000px) rotateX(0deg) rotateY(180deg);

  }
}

.banner .slider .item {
  position: absolute;
  inset: 0 0 0 0;
  transform:
    rotateX(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(-250px);

}

.banner .slider .item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<script setup>


const images = ref([
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
]);

</script>