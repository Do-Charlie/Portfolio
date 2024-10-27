<template>

    <div class="content-projet-container">
        <ProjetSeparator v-if="props.content.media" text="Media"></ProjetSeparator>

        <div v-for="media in props.content.media">
            <video v-if="media.type == 'vod'" class="fadeup" playsinline loop muted autoplay>
                <source :src="media.content">
            </video>
            <NuxtImg v-else-if="media.type == 'img'" class="fadeup" loading="lazy" :src="media.content">

            </NuxtImg>

            <p class="content-text" v-else-if="media.type == 'txt'"> {{ media.content }} </p>
        </div>


        <ProjetSeparator v-if="props.content.grid" text="Grille"></ProjetSeparator>
        <div class=" grid-photo" v-if="props.content.grid_media">

            <NuxtImg v-for="media in props.content.grid_media" class="fadeup" :src="media.src">

            </NuxtImg>

        </div>


        <ToolsObserveScroll :threshold=0 element="fadeup"></ToolsObserveScroll>

    </div>
</template>

<script setup>


import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useMyStore } from '~/stores/myStore.js';


const props = defineProps({
    content: Object,
});




const myStore = useMyStore();




</script>

<style scoped>
.content-projet-container {
    display: flex;
    flex-direction: column;
    padding: 15vh 15vw;
    gap: 5vw;
}

video,
img {
    width: 100%;
}

.fadeup {
    transition: transform 0.5s ease-in-out, opacity 1s ease-in-out;
    opacity: 0;
    transform: translateY(100px);
}

.fadeup.is-scrolled {
    opacity: 1;
    transform: translateY(0px);
}

.grid-photo {
    display: grid;

    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 50%);
    gap: 10px;
}

.grid-photo img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}


.content-text {
    margin-top: 10%;
    text-align: center;
}

@media only screen and (min-width: 2399px) {
    .content-projet-container {

        padding: 15vh 25vw;
    }
}

@media only screen and (max-width: 768px) {
    .grid-photo {
        grid-template-columns: repeat(1, 100%);
        grid-template-rows: repeat(4, 25%);
        gap: 5vw;

    }
}
</style>