<template>
    <div class="banner" v-if="banner">
        <NuxtImg class="banner-img" :src="banner.src" preload></NuxtImg>

        <div class="banner-content">
            <NuxtImg class="logo-content" :src="banner.logo" preload> </NuxtImg>
            <p class="description"> {{ props.banner.description }}</p>
            <div class="info-content">
                <div class="info">
                    <h3>Date</h3>
                    <p> {{ banner.date }}</p>
                </div>
                <div class="info">
                    <h3>Role </h3>
                    <p> {{ banner.role }} </p>
                </div>
                <div class="info">
                    <h3>Tags </h3>
                    <p> {{ banner.tags }}</p>
                </div>
                <div class="info">
                    <h3> Techs</h3>
                    <p> {{ banner.techs }}</p>
                </div>
                <div v-if="banner.link_site" class="info">
                    <h3> Voir</h3>
                    <a :href="banner.link_site" target="_blank"> {{ banner.link_site }}</a>
                </div>
            </div>


        </div>
        <div class="discover " :class="{ 'hide': myStore.scrollY > 100 }">Scroll</div>

    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import { useMyStore } from '~/stores/myStore.js';

const myStore = useMyStore();

const props = defineProps({
    banner: Object,
});
const banner = props.banner;


onMounted(() => {
    myStore.refreshHoverCursor = true;


});
</script>

<style scoped>
.banner {
    position: relative;
    width: 100vw;
    height: 100lvh;
    display: flex;
    color: rgb(229, 225, 225);
    font-family: 'NeueMontrealRegular', serif;
    /* Police personnalisée pour les paragraphes */
    letter-spacing: 1px;
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
    position: absolute;
    width: 20vw;
    min-width: 350px;
    right: 10vw;
    height: 100lvh;
    padding: 10vh 0px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.info-content {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 30px;
    word-spacing: 4px;

}

.logo-content {}

.info {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.description {
    font-size: 14px;
    line-height: 120%;
    word-spacing: 1px;

}

h3 {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 14px;
    font-family: 'NeueMontrealRegular', serif;
    /* Police personnalisée pour les paragraphes */
    color: rgb(255, 255, 255);


}

.info-content p,
.info-content a {
    font-family: 'NeueMontrealRegular', serif;
    /* Police personnalisée pour les paragraphes */

    font-weight: 100;
    font-size: 14px;
}

.info-content a {
    color: white;
}

.info-content a:hover {
    color: var(--main-color);
}

.discover {
    position: absolute;
    color: grey;
    display: flex;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
    bottom: 32px;
    text-transform: uppercase;
    font-weight: 300;
    transition: opacity var(--duration-opacity) ease-out;
    opacity: 1;
    z-index: 5;
}



.hide {
    opacity: 0;
}

@media only screen and (max-width: 768px) {
    .banner-content {

        padding: 10vh 10%;
        box-sizing: border-box;

    }

    .logo-content {
        width: 80%;
        margin: 0 auto;
    }
}
</style>