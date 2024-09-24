<template>
    <div></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const props = defineProps({
  element: String,
  threshold: Number,
});


// Fonction pour observer l'élément avec IntersectionObserver
const observeScroll = () => {
  const scrollElements = document.querySelectorAll("."+props.element);
 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-scrolled');
      }else{
        entry.target.classList.remove('is-scrolled');

      }
    });
  }, { threshold: props.threshold });

  scrollElements.forEach((element) => {
    observer.observe(element); // Observez chaque élément individuellement
  });
};


onMounted(() => {

observeScroll();
});

</script>

