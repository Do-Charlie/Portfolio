<template>
      <OverlayHeader v-if="!isHomePage"></OverlayHeader>
      <BackgroundPopSquare></BackgroundPopSquare>

      <slot> </slot>
      <OverlayFooter></OverlayFooter>

</template>

<script setup>

import { useRoute } from 'vue-router';
import { computed } from 'vue';

// Accède à la route actuelle
const route = useRoute();

// Propriété calculée pour vérifier si c'est la page d'accueil
const isHomePage = computed(() => route.path === '/');
</script>

<style scoped></style>