<template>
    <header>
        <div class="title-container">

            <NuxtLink to="/" class="title-logo header-nav-link">
                Charlie Do

            </NuxtLink>

        </div>
        <nav>

            <NuxtLink to="/projets" class=" header-nav-link appear" :class="{ 'active': isActive('/projets') }"> [
                Projets
                ]
            </NuxtLink>
            <NuxtLink to="/services" class=" header-nav-link appear" :class="{ 'active': isActive('/services') }"> [
                Services ]
            </NuxtLink>

        </nav>
    </header>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

import { useMyStore } from '~/stores/myStore.js';
const myStore = useMyStore();
const route = useRoute();


function isActive(path) {
    return route.path.startsWith(path)
}

const appearNav = async () => {

    setTimeout(() => {
        if (!document) return;
        const navLinks = document.querySelectorAll('.header-nav-link');

        navLinks.forEach((link) => {

            link.classList.remove('appear');
        });
        let delay = 0;
        navLinks.forEach((link) => {

            link.style.animationDelay = `${delay}s`;
            link.classList.add('appear');
            delay += 0.3; // Increment the delay for each element
        });
        myStore.refreshHoverCursor = true;

    }, 100); // Duration of both animations combined


}

onMounted(() => {
    console.log('la')
    appearNav();


})



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

    padding-top: 20px;


}

.title-container {
    position: absolute;
    display: flex;
    flex-direction: row;
}


.title-logo {
    font-weight: 200;
    text-transform: uppercase;
    font-size: 32px;
    letter-spacing: 2px;

    transition: opacity 0.2s ease-in-out;
    color: var(--main-color);
}

.title-logo:hover {
    color: var(--color);
}

nav {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;
    margin-right: 1rem;
    font-size: 20px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.header-nav-link {
    opacity: 0;
}

.header-nav-link.appear {
    animation: appear 1s ease-in-out;
    animation-fill-mode: forwards;

}

.active {
    font-weight: 400;
    color: var(--color);
}

@keyframes appear {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@media only screen and (max-width: 768px) {
    .title-logo {
        margin-top: 5px;
        font-size: 18px;
    }
}
</style>