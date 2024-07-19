<template>
    <header>
        <div class="title-container">
            
            <NuxtLink to="/" class="linear title-logo"  :class="{ 'is-scrolled': isScrolled }"> Charlie Do</NuxtLink>
        </div>
        <nav :class="{ 'is-scrolled': isScrolled }">
            <NuxtLink to="/" class="linear "> Projets</NuxtLink>
            <NuxtLink to="/" class="linear "> CV</NuxtLink>
            <NuxtLink to="/" class="linear "> Contact</NuxtLink>
            <NuxtLink to="/" class="linear "> Lang</NuxtLink>

        </nav>
    </header>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  if (window.scrollY > 50) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  console.log('mount')

});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  console.log('unmount')
});
</script>

<style scoped>
header {
    padding: var(--small-padding);
    position: fixed;
    width: 100vw;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
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
.title-logo {
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