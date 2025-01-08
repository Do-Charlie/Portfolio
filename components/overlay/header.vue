<template>
    <header v-if="!isHomePage()">
        <div class="title-container">

            <NuxtLink to="/" class="title-logo ">
                Charlie Do

            </NuxtLink>

        </div>
        <nav>
            <NuxtLink to="/" class="linear "> Projets</NuxtLink>
            <NuxtLink to="/" class="linear "> Services</NuxtLink>
            <NuxtLink to="/" class="linear "> A propos</NuxtLink>

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
    position: absolute;
    display: flex;
    flex-direction: row;
}


.title-logo {
    font-weight: 100;
    text-transform: uppercase;
    font-size: 50px;
    letter-spacing: 2px;

    transition: opacity 0.2s ease-in-out;
    color: var(--main-color);
    margin-top: 20px;
}

.title-logo:hover {
    color: var(--main-color);
}


@media only screen and (max-width: 768px) {
    .title-logo {
        margin-top: 5px;
        font-size: 18px;
    }
}
</style>