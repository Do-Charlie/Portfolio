<template>
    <div class="projet-page-container" ref="pageContainer">
        <main>
            <div class="slider" ref="slider">
                <div class="slider-inner">
                    <div class="item" v-for="(projet, index) in projets" :key="index">
                        <div class="img" :style="{ backgroundImage: `url(${projet.src})` }"></div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import projetsJson from '~/assets/data/projets.json';
const projets = projetsJson;
// Référence aux éléments
const images = ref([]);
const slider = ref(null);
const sliderWidth = ref(0);
const current = ref(0);
const target = ref(0);
const ease = 0.1;
const pageContainer = ref();
const imageWidth = ref();
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
    sliderWidth.value = images.value.length * (800 + 50); // 400px largeur + 20px marge
    slider.value.style.width = `${sliderWidth.value}px`;
    imageWidth.value = sliderWidth.value / imagesList.length;
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
    // animateImages();
    // Boucle d'animation
    requestAnimationFrame(animate);
}

// Animation des images individuelles
function animateImages() {
    if (!imageWidth.value) return;

    const ratio = current.value / imageWidth.value;

    images.value.forEach((image, index) => {
        const intersectionRatioValue = ratio - index;
        const offset = intersectionRatioValue * 10; // Ajuste l'effet de décalage
        setTransform(image, `translateX(${offset}px)`);
    });
}
function handleResize() {
    init(); // Recalculer les dimensions
}// Montage
onMounted(() => {
    // Obtenir les images
    images.value = [...document.querySelectorAll(".img")];
    // Initialiser le slider
    init();
    window.addEventListener("resize", handleResize);

    // Démarrer l'animation
    animate();
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
});
</script>


<style scoped>
/* Page et conteneur principal */
main {
    position: fixed;
    top: 0;
    left: 5%;
    width: 90%;
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

}

/* Conteneur interne pour alignement */
.slider-inner {
    position: absolute;
    top: 10%;
    height: 80%;
    display: flex;
    justify-content: space-between;


    /* Activation du défilement */
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    /* Snap horizontal obligatoire */
    scroll-behavior: smooth;
    /* Comportement lisse */
}

/* Éléments individuels */
.item {
    flex: 0 0 auto;
    width: 800px;
    height: 100%;
    margin-right: 200px;
    overflow: hidden;

    /* Point d'arrêt pour le snap */
    scroll-snap-align: center;
    /* Chaque item s'aligne au centre */
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
