<template>
    <div v-if="projet">
        <ProjetBanner :banner="projet.banner"> </ProjetBanner>
        <ProjetContent v-if="projet.content" :content="projet.content"></ProjetContent>
        <!-- <div class="next-project" style="height: 100vh; width: 100vw;"></div> -->

        <ProjetNextProject :banner="nextProject.banner" :link="nextProject.link"></ProjetNextProject>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import { useMyStore } from '~/stores/myStore.js';
const myStore = useMyStore();
import { useRoute } from 'vue-router';

import projets from '~/assets/data/projets.json';

const projet = ref();
const nextProject = ref();

onMounted(() => {
    const { nom_projet } = useRoute().params;

    // Trouve l'index du projet actuel
    const currentIndex = projets.findIndex((e) => e.name === nom_projet);

    if (currentIndex !== -1) {
        // Assigne le projet actuel
        projet.value = projets[currentIndex];

        // Calcule l'index du projet suivant, en bouclant au premier si nécessaire
        const nextIndex = (currentIndex + 1) % projets.length;
        nextProject.value = projets[nextIndex];
    }
})


</script>

<style scoped></style>