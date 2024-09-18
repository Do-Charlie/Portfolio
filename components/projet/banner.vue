<template>
<div class="banner" v-if="banner"> 
    <NuxtImg class="banner-img" src="/projets/rcarre/banner.webp"></NuxtImg>

    <div class="banner-content">
        <NuxtImg class="logo-content" :src="banner.logo" loading="lazy" > </NuxtImg>
        <p class="description"> {{props.banner.description }}</p>
        <div class="info-content">
            <div class="info">
                <h3>Date</h3>
                <p> {{banner.date}}</p>
            </div>
            <div class="info">
                <h3>Role </h3>
                <p> {{banner.role}} </p>
            </div>
            <div class="info">
                <h3>Tags </h3>
                <p> {{ banner.tags }}</p>
            </div>
            <div class="info">
                <h3> Techs</h3>
                <p> {{banner.techs}}</p>
            </div>

        </div>


    </div>
    </div>
</template>

<script setup>

const props = defineProps({
  banner: Object,
});
const banner=props.banner;
</script>

<style scoped>

.banner{
    position: relative;
    width: 100vw;
    height: 100vh;
    display:flex;
    color: rgb(229, 225, 225);
    font-family: 'NeueMontrealRegular', serif; /* Police personnalisée pour les paragraphes */
    letter-spacing: 1px;

}


.banner-img{
    position: absolute;
    object-fit: cover;
    height: 100%;
    width: 100%;
    object-position: 20% 100%;
    filter: brightness(15%);
    z-index: -1;
}

.banner-content{
    position: absolute;
    width: 20vw;
    min-width: 350px;
    right: 10vw;
    height: 100vh;
    padding: 10vh 0px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.info-content{
    display:flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 30px;
    word-spacing: 4px;

}

.logo-content{
}

.info{
    display:flex;
    flex-direction: column;
    gap: 5px;
}

.description{
    font-size: 14px;
    line-height: 120%;
    word-spacing: 1px;

}

h3{
    font-weight: 300;
    text-transform: uppercase;
    font-size: 14px;
    font-family: 'NeueMontrealRegular', serif; /* Police personnalisée pour les paragraphes */
    color: rgb(255, 255, 255);

    
}
.info-content p{
    font-weight: 100;
    font-size: 14px;
}
</style>