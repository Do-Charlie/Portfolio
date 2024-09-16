<template>
<div class="banner"> 
    <NuxtImg class="banner-img" src="/projets/rcarre/banner.webp"></NuxtImg>

    <div class="banner-content">
        <h1> Rcarré</h1>
        <p class="description"> Une application de planning Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam vitae mollitia placeat nesciunt laudantium recusandae cum veniam voluptatum officia nisi.</p>
       
    </div>
    </div>
</template>

<script setup>
</script>

<style scoped>

.banner{
    position: relative;
    width: 100vw;
    height: 100vh;
    display:flex;
}


.banner-img{
    position: absolute;
    object-fit: cover;
    height: 100%;
    width: 100%;
    object-position: 0% 100%;
    filter: brightness(30%);
    z-index: -1;
}

.banner-content{
    position: absolute;
    width: 24vw;
    right: 10vw;
    height: 100vh;
    padding: 10vh 0px;
}
</style>