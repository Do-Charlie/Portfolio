<template>
       <!-- <div class="card-container" :style="{ backgroundImage: `url(${card.src})` }"> -->
        <div class="card-container pointer" :class="{ 'is-selected': selectedIndex==card.id , 'no-pointer': selectedIndex==card.id }" >

        <NuxtImg class="background-card" :src="card.src" preload></NuxtImg>
        <div class="card-info"  >
            <span class="card-title">
                {{ card.title }}
            </span>
            <div class="card-description">
                <span v-for="tag in card.tags">
                    [{{ tag }}]
                    </span>
                </div>
                <NuxtLink :to="card.link" class="pointer">
                    Ouvrir
                </NuxtLink>
        </div>

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

  width: 100%; 
  height: 100%; 
    position: relative;
    overflow: hidden;
  border-radius: 4px;
  transition: transform 0.2s ease-in-out;
}
.background-card{
    pointer-events: none;

    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    object-fit: cover;
    left: 0;
    filter: brightness(70%);
    top: 0;
    transition: opacity 0.2s ease-in-out, filter 0.2s ease-in-out;

}

.is-selected .background-card{
    opacity: 0.7;
    filter: blur(2px);
}



.card-info{
    background-color: rgba(226, 226, 226, 0.5);
    height: 0%;
    overflow-y: hidden;
    transition: height 0.5s ease-in-out;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: var(--color);
}

html[data-theme='dark'] .card-info{
    background-color: rgba(0, 0, 0, 0.695);
}


.is-selected .card-info{
    height: 100%;
}

.card-title{
    text-transform: uppercase;
    font-family: 'Source Serif 4', serif;
    font-weight: 100;
    font-size: 140%;
    color:var(--color);

}
.card-description{
    font-weight: 300;
    font-size: 8px;
    text-transform: uppercase;
}

.card-info a{
    color: var(--color);
    font-weight: 100;
    text-transform: uppercase;
    font-size: 10px;
    transition: transform ease-in-out 0.2s;
}

.card-info a:hover{
    transform: scale(1.2);
    color: var(--second-color);
}
</style>
