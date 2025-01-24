<template>
    <div class="projet-page-container" ref="pageContainer">
        <main>
            <div class="slider" ref="slider">
                <div class="slider-inner">
                    <div class="item" v-for="(projet, index) in projets" :key="index">
                        <div class="img" :style="{ backgroundImage: `url(${projet.src})` }">

                            <h4 style="display:flex;align-items: center;justify-content: center;font-size:50px;">

                                {{ projet.name }}
                            </h4>
                        </div>
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
const items = ref([]);
const slider = ref(null);
const sliderWidth = ref(0);
const current = ref(0);
const target = ref(0);
const ease = 1;
const pageContainer = ref();
const imageWidth = ref();
// Liste d'images pour le défilement


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
    sliderWidth.value = items.value.length * (window.innerWidth * 0.4 + window.innerWidth * 0.12); // 400px largeur + 20px marge
    slider.value.style.width = `${sliderWidth.value}px`;
    imageWidth.value = sliderWidth.value / projets.length;
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
    animateImages();
    // Boucle d'animation
    requestAnimationFrame(animate);
}


let isScrolling = null; // Timer pour détecter l'inactivité du scroll
let isUserScrolling = false; // Flag pour détecter si un défilement est en cours

function animateImages() {
    if (!imageWidth.value || !isUserScrolling) return; // Ne rien faire si pas de défilement

    // Déterminer la direction du scroll
    const direction = current.value > target.value ? 1 : -1;
    const skewAmount = 5 * direction;

    items.value.forEach((item) => {
        // Inclinaison fixe pendant le défilement
        setTransform(item, `skew(${skewAmount}deg)`);
    });
}

// Fonction pour réinitialiser les images lorsque le défilement s'arrête
function resetImages() {
    items.value.forEach((item) => {
        setTransform(item, `skew(0deg)`);

    });
}

function handleScroll() {
    isUserScrolling = true; // Détecter que l'utilisateur défile
    target.value = window.scrollY; // Mettre à jour la position cible

    // Réinitialiser immédiatement si l'utilisateur arrête de scroller
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        isUserScrolling = false; // L'utilisateur a cessé de défiler
        resetImages(); // Réinitialiser immédiatement les images
    }, 20); // Délai à zéro pour un effet instantané
}

// Fonction pour arrêter le défilement après un délai d'inactivité
function stopScroll() {
    isUserScrolling = false; // Marquer la fin du défilement
}

function handleResize() {
    init(); // Recalculer les dimensions
}// Montage
onMounted(() => {
    // Obtenir les images
    items.value = [...document.querySelectorAll(".item")];

    // Initialiser le slider
    init();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Détecter l'arrêt du défilement
    document.addEventListener(
        "scroll",
        () => {
            clearTimeout(isScrolling);
            isScrolling = stopScroll;
        },
        false
    );

    // Démarrer l'animation
    animate();
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("scroll", handleScroll);

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
    top: 20%;
    height: 60%;
    display: flex;
    justify-content: space-between;


    /* Activation du défilement */
    overflow-x: scroll;

}

/* Éléments individuels */
.item {
    flex: 0 0 auto;
    width: 40vw;
    height: 100%;
    margin-right: 10vw;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    border-radius: 5px;


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
    /* Inclure transform */

}

.img:hover {
    filter: grayscale(0%);
    transform: scale(1.05);
}
</style>
