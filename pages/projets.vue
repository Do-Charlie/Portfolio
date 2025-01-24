<template>
    <div class="projet-page-container" ref="pageContainer">
        <main>
            <div class="slider" ref="slider">
                <div class="slider-inner">
                    <div class="item" v-for="(image, index) in imagesList" :key="index">
                        <div class="img" :style="{ backgroundImage: `url(${image})` }"></div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Référence aux éléments
const images = ref([]);
const slider = ref(null);
const sliderWidth = ref(0);
const current = ref(0);
const target = ref(0);
const ease = 0.1;
const pageContainer = ref();

// Liste d'images pour le défilement
const imagesList = [
    "/slider_projet/viaresp.webp",
    "/slider_projet/viaresp.webp",
    "/slider_projet/viaresp.webp",
    "/slider_projet/viaresp.webp",
    "/slider_projet/viaresp.webp",
];

// Fonction d'interpolation linéaire
function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

// Fonction pour appliquer une transformation
function setTransform(el, transform) {
    el.style.transform = transform;
}

// Initialisation de la largeur du slider
function init() {
    // Calcul de la largeur totale du slider
    sliderWidth.value = images.value.length * (400 + 20); // 400px largeur + 20px marge
    slider.value.style.width = `${sliderWidth.value}px`;

    // Ajuster la hauteur du body pour activer le scroll
    pageContainer.value.style.height = `${sliderWidth.value - window.innerWidth + window.innerHeight}px`;
}

// Animation lissée du défilement
function animate() {
    // Interpolation linéaire entre la position actuelle et la cible
    current.value = lerp(current.value, target.value, ease);
    target.value = window.scrollY;

    // Appliquer la transformation au slider
    setTransform(slider.value, `translateX(-${current.value}px)`);

    // Boucle d'animation
    requestAnimationFrame(animate);
}

// Montage
onMounted(() => {
    // Obtenir les images
    images.value = [...document.querySelectorAll(".img")];
    // Initialiser le slider
    init();

    // Démarrer l'animation
    animate();
});
</script>


<style scoped>
/* Page et conteneur principal */
main {
    position: fixed;
    top: 0;
    left: 10%;
    width: 80%;
    height: 100vh;
    overflow: hidden;
}

/* Slider global */
.slider {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    will-change: transform;
    /* Optimisation pour les animations */
}

/* Conteneur interne pour alignement */
.slider-inner {
    position: absolute;
    top: 15%;
    height: 70%;
    display: flex;
    justify-content: space-between;
}

/* Éléments individuels */
.item {
    flex: 0 0 auto;
    width: 400px;
    height: 100%;
    margin-right: 20px;
    overflow: hidden;
}

/* Images avec styles */
.img {
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: grayscale(100%);
    transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.img:hover {
    filter: grayscale(0%);
    transform: scale(1.05);
}
</style>
