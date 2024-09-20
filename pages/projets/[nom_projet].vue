<template>
    <div v-if="projet">
    <ProjetBanner :banner="projet.banner"> </ProjetBanner>
    
    </div>
 
</template>

<script setup>
import { ref, onMounted } from 'vue';

import { useMyStore } from '~/stores/myStore.js';
const myStore=useMyStore();
import { useRoute } from 'vue-router';

import projets from '~/assets/data/projets.json';

const projet=ref();


onMounted (()=>{
    console.log(projets)
    const { nom_projet } = useRoute().params;
    console.log(nom_projet)

    projet.value=projets.find((e) =>  e.name==nom_projet )
})


</script>

<style scoped>


</style>