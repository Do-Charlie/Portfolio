<template>
    <header>
        <div class="title-container">

            <NuxtLink v-if="isHomePage()" @click="myStore.scrollTo('heroBanner')" class="title-logo "
                :class="{ 'is-scrolled': myStore.scrollY > 10 }">
                Charlie Do

            </NuxtLink>
            <NuxtLink v-else to="/" class="title-logo is-scrolled"> Charlie Do</NuxtLink>

        </div>
        <nav>
            <!-- <NuxtLink to="/" class="linear "> Projets</NuxtLink>
            <NuxtLink to="/" class="linear "> FRONT</NuxtLink>
            <NuxtLink to="/" class="linear "> Contact</NuxtLink>
            <NuxtLink to="/" class="linear "> Lang</NuxtLink> -->

        </nav>
    </header>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

import { useMyStore } from '~/stores/myStore.js';
const myStore = useMyStore();
const route = useRoute();

function isHomePage() {
    return route.path === '/';
}


</script>

<style scoped>
header {
    padding: var(--small-padding);
    position: fixed;
    top: 0;
    width: 100vw;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
    box-sizing: border-box;
    height: 22px;

}

.title-container {
    position: relative;
    display: flex;
    flex-direction: row;
}


.title-logo {
    font-weight: 100;
    text-transform: uppercase;
    font-size: 24px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    color: rgba(128, 128, 128, 0.853);
}

.title-logo:hover {
    color: var(--main-color);
}

.title-logo.is-scrolled {
    opacity: 1;
}

@media only screen and (max-width: 768px) {
    .title-logo {
        margin-top: 5px;
        font-size: 18px;
    }
}
</style>