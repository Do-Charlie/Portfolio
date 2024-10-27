<template>
    <div class="banner" v-if="banner">
        <NuxtImg class="banner-img" :src="banner.src" loading="lazy"></NuxtImg>

        <NuxtLink :to="link" class="banner-content next" :class="{ active: isNextActive }">
            <span> Projet Suivant</span>
        </NuxtLink>

        <div class="banner-content logo" :class="{ active: !isNextActive }">
            <NuxtImg class="logo-content" :src="banner.logo" loading="lazy"></NuxtImg>
        </div>
        <ToolsObserveScroll :threshold=0.99 element="banner"></ToolsObserveScroll>

    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useMyStore } from '~/stores/myStore.js';

const myStore = useMyStore();

const props = defineProps({
    banner: Object,
    link: String,
});
const banner = props.banner;



</script>

<style scoped>
.banner {
    position: relative;
    width: 100vw;
    height: 100dvh;
    display: flex;
    color: rgb(229, 225, 225);
    font-family: 'NeueMontrealRegular', serif;
    letter-spacing: 1px;
    flex-direction: column;
    overflow: hidden;
}

.banner-img {
    position: absolute;
    object-fit: cover;
    height: 100%;
    width: 100%;
    object-position: 20% 100%;
    filter: brightness(15%);
    z-index: -1;
}

.banner-content {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: height 0.6s ease-in-out;
}

.logo {
    height: 100dvh;
}

.banner-content.next {
    font-size: 5vw;
    text-transform: uppercase;
    font-weight: 100;
    background-color: rgba(0, 0, 0, 0.284);
}

.banner .banner-content.next {
    height: 0;
}

.banner.is-scrolled .banner-content.next {
    height: 100dvh;
    pointer-events: none
}

.banner.is-scrolled .banner-content.logo {
    height: 0dvh;
}


.banner-content.next:hover {
    color: var(--main-color);

}

.next span {
    pointer-events: auto
}

.next:hover {}

.next:hover span {
    color: white;
}


.logo-content {
    width: 40%;
    height: auto;
}
</style>
