<template>
    <header>
        <div class="title-container">
            
            <!-- <NuxtLink to="/" class="linear title-logo"  :class="{ 'is-scrolled': myStore.scrollY>50 }"> Charlie Do</NuxtLink> -->
            <NuxtLink to="/" class="title-logo "  :class="{ 'is-scrolled': myStore.scrollY<-10 }">
                <!-- <NuxtImg v-if="myStore.theme=='light'" class="pointer" src="/logo_light.png"></NuxtImg> 
                <NuxtImg v-else class="pointer" src="/logo.png"></NuxtImg>  -->

            </NuxtLink>

        </div>
        <nav >
            <!-- <NuxtLink to="/" class="linear "> Projets</NuxtLink>
            <NuxtLink to="/" class="linear "> FRONT</NuxtLink>
            <NuxtLink to="/" class="linear "> Contact</NuxtLink>
            <NuxtLink to="/" class="linear "> Lang</NuxtLink> -->

        </nav>
    </header>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useMyStore } from '~/stores/myStore.js';
const myStore=useMyStore();




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
.title-container{
    position: relative;
    display:flex;
    height: 22px;
    width: 10px;
}


</style>