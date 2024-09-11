<template>
       <div class="card-container" :style="{ backgroundImage: `url(${card.src})` }">
        <div class="card-info">
        {{ card.title }}
        </div>

        <span v-if="selectedIndex==card.id"> TOTALEMENT CAAA</span>
</div>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useMyStore } from '~/stores/myStore.js';

const myStore = useMyStore();

const props = defineProps({
  card: Object,
  selectedIndex: Number,
});
</script>

<style scoped>
.card-container {
  background-size: cover; 
  background-position: center; 
  width: 100%; 
  height: 100%; 
  filter: brightness(70%);

  /* */

  border-radius: 4px;
  /* border: 1px var(--second-color) solid; */
  transition: transform 0.2s ease-in-out;
}

.card-container:hover{
  /* border: 1px var(--main-color) solid; */
  transform: scale(1.02);
}

.card-info{
    background-color: rgba(0, 0, 0, 0.158);
    height: 0%;
    overflow-y: hidden;
    transition: height 0.5s ease-in-out;

}

.card-container:hover .card-info{
    height: 100%;
}
</style>
