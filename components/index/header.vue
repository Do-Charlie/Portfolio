<template>
    <header>
        <div class="title-container">
            
            <!-- <NuxtLink to="/" class="linear title-logo"  :class="{ 'is-scrolled': myStore.scrollY>50 }"> Charlie Do</NuxtLink> -->
            <NuxtLink to="/" class="title-logo"  :class="{ 'is-scrolled': myStore.scrollY>50 }">
                <NuxtImg v-if="myStore.theme=='light'" class="pointer" src="/logo_light.png"></NuxtImg> 
                <NuxtImg v-else class="pointer" src="/logo.png"></NuxtImg> 

            </NuxtLink>

        </div>
        <nav >
            <NuxtLink to="/" class="linear "> Projets</NuxtLink>
            <NuxtLink to="/" class="linear "> FRONT</NuxtLink>
            <NuxtLink to="/" class="linear "> Contact</NuxtLink>
            <NuxtLink to="/" class="linear "> Lang</NuxtLink>

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
/* .title-logo {
    top: 20px;
    position: absolute;
    font-size: 100px;
    font-weight: 100;
    text-wrap: nowrap;
    text-transform: uppercase;
    word-spacing: 10px;
    transition: font-size calc(var(--duration-opacity)/2) ease-out,top calc(var(--duration-opacity)/2) ease-out,font-weight calc(var(--duration-opacity)/2) ease-out ;
    box-sizing: border-box;
    

    
}

.title-logo.is-scrolled{
    font-size: 24px;
    top:-3px;
    font-weight: 300;
} */

.title-logo{
    position: relative;

}

.title-logo img{
    top: 150px;
    left: 100px;
    position: absolute;
    width: 600px ;
    max-width: 50vw;
    height: auto;
    transition: width calc(var(--duration-opacity)/2) ease-out,top calc(var(--duration-opacity)/2) ease-out,left calc(var(--duration-opacity)/2) ease-out ;
}


.title-logo.is-scrolled img{
    top:0px;
    width: 200px;
    left: 0px;
} 

nav{
    display:flex;
    flex-flow: row nowrap;
    gap: 20px;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 16px;
}

nav.is-scrolled{
}

nav a:hover{
    font-weight: 400;
}


</style>