<template>
       <div class="card-container" :style="{ backgroundImage: `url(${card.src})` }">


</div>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useMyStore } from '~/stores/myStore.js';

const myStore = useMyStore();

const props = defineProps({
  card: Object,
});
</script>

<style scoped>
.card-container {
  background-size: cover; 
  background-position: center; 
  width: 100%; 
  height: 100%; 

  /* */

  border-radius: 4px;
  /* border: 1px var(--second-color) solid; */
  transition: transform 0.2s ease-in-out;
}

.card-container:hover{
  /* border: 1px var(--main-color) solid; */
  transform: scale(1.02);
}
</style>
