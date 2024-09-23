<template>
    

    <div class="content-projet-container">
        <video class="fadeup" playsinline loop muted autoplay>
            <source src="/public/projets/rcarre/video.mp4">
        </video>

        <video class="fadeup" playsinline loop muted autoplay>
            <source src="/public/projets/rcarre/video.mp4">
        </video>
    </div>
</template>

<script setup>


import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useMyStore } from '~/stores/myStore.js';
// Fonction pour observer l'élément avec IntersectionObserver
const observeScroll = () => {
  const scrollElements = document.querySelectorAll('.fadeup');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-scrolled');
      }else{
        entry.target.classList.remove('is-scrolled');

      }
    });
  }, { threshold: 0.3 });

  scrollElements.forEach((element) => {
    observer.observe(element); // Observez chaque élément individuellement
  });
};


const myStore = useMyStore();




onMounted(() => {

  observeScroll();
});
</script>

<style scoped>
.content-projet-container{
    display:flex;
    flex-direction: column;
    padding: 15vh 15vw;
    gap: 5vw;
}
video{
    width: 100%;
}

.fadeup{
    transition: transform 0.5s ease-in-out , opacity 1s ease-in-out;
    opacity: 0;
    transform: translateY(100px);
}

.fadeup.is-scrolled{
    opacity: 1;
    transform: translateY(0px);
}

@media only screen and (min-width: 2399px) {
    .content-projet-container{
   
    padding: 15vh 25vw;
}
}
</style>