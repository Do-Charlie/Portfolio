<template>
  <div class="container hero">
    <div class="content-hero">
      <!-- <nav ref="navPos">
        <NuxtLink class="linear" to="#"> Développeur</NuxtLink>
        <NuxtLink class="linear" to="#"> Front end</NuxtLink>
        <NuxtLink class="linear" to="#"> Back end</NuxtLink>


      </nav> -->
      <div class="title-container">
        <span class="linear-title"> Développeur
          <div class="fullstack" ref="navPos">Fullstack
            <div class="tech"> <ToolsFlipTech></ToolsFlipTech></div>
          </div>
        </span>

      </div>



    </div>

    <div class="discover linear-title" :class="{ 'hide': myStore.scrollY > 100 }">Scroll</div>
  </div>




</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import { useMyStore } from '~/stores/myStore.js';

const myStore = useMyStore();

const navPos = ref();
const cover = ref();

function getPosition(position) {
  if (!position) return
  const pos = position.getBoundingClientRect();
  // const top = position.clientHeight;
  return pos;

}



</script>

<style scoped>
.hero {
  height: 100svh;
  position: relative;

}

.discover {
  position: absolute;
  display: flex;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  bottom: 32px;
  text-transform: uppercase;
  font-weight: 300;
  transition: opacity var(--duration-opacity) ease-out;
}



.hide {
  opacity: 0;
}

.content-hero {
  display: flex;
  flex-flow: column;
  gap: 200px;
  align-items: center;
  justify-content: center;
  /* padding-top: 350px; */
  height: 100%;
}



.title-container {
  display: flex;

  font-size: 10vw;
  font-weight: 300;
  text-transform: uppercase;
  z-index: 1;
}

.title-container>span {
  flex-direction: column;
  display: flex;
}

.content-hero nav {
  display: flex;
  flex-direction: column;
  font-size: 60px;
  font-weight: 100;
  gap: 30px;
  text-transform: uppercase;
  padding-left: 15vw;
  z-index: 1;

}



.fullstack {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.tech{
  display:flex;
  flex:1;
  height: 100%;
  align-items: center;
  justify-content: center;
 
}

.projet-container {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transition: transform 1s ease-in-out width 1s ease-in-out;
}

.projet-container.is-scrolled {
  transform: translateX(var(--projet-position));

}
</style>