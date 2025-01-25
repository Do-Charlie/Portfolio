<template>
    <div class="projet-page-container" ref="pageContainer">
        <main>
            <div class="slider" ref="slider">
                <div class="slider-inner">
                    <div class="item pointer" v-for="(projet, index) in projets" :key="index" :class="getScrollClass()"
                        :style="index === 0 ? { marginLeft: `30vw` } : {}" @click="itemSelected = index">
                        <div class="img" :style="{ backgroundImage: `url(${projet.src})` }"
                            :class="{ 'active': itemSelected == index }">

                        </div>
                        <div class="techs-container">

                        </div>
                        <div class="item-container">
                            <h3>
                                {{ projet.banner.title }}
                            </h3>
                            <p class="tags-container">
                                <span v-for="(tag, index) in projet.tags" :key="index" class="tag">
                                    [ {{ tag }} ]
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="discover linear pointer" :class="{ hide: myStore.scrollY > 100 }">Scroll Down</div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useMyStore } from "~/stores/myStore.js";

const myStore = useMyStore();
const projets = (await import("~/assets/data/projets.json")).default;

const slider = ref(null);
const pageContainer = ref();
const items = ref([]);

const currentScroll = ref(0);
const lastScroll = ref(0);
const target = ref(0);
const current = ref(0);
const ease = 0.1;
const imageWidth = ref(0);

const itemSelected = ref();

// Fonction pour appliquer les classes CSS en fonction du sens du scroll
function getScrollClass() {


    // Tolérance pour ignorer les petites variations
    const tolerance = 5;

    // Si le défilement est à zéro
    if (currentScroll.value === 0 || Math.abs(currentScroll.value - lastScroll.value) > 50) {
        return "is-not-scroll";
    }

    // Si le défilement va vers le bas
    if (currentScroll.value > lastScroll.value + tolerance) {
        return "is-scroll-down";
    }

    // Si le défilement va vers le haut
    if (currentScroll.value < lastScroll.value - tolerance) {
        return "is-scroll-up";
    }

    // Sinon, aucune action de défilement significative
    return "is-not-scroll";
}


// Fonction d'interpolation pour lisser le défilement
function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

// Fonction pour mettre à jour le positionnement du slider
function animate() {
    current.value = lerp(current.value, target.value, ease); // Lissage
    slider.value.style.transform = `translateX(-${current.value}px)`;
    slider.value.classList.remove("is-scroll-up", "is-scroll-down", "is-not-scroll");
    slider.value.classList.add(getScrollClass());
    // Mise à jour des classes des items en fonction du scroll
    // items.value.forEach((item) => {
    //     item.classList.remove("is-scroll-up", "is-scroll-down", "is-not-scroll");
    //     item.classList.add(getScrollClass());
    // });

    requestAnimationFrame(animate);
}

// Initialisation du slider
function initSlider() {
    const item = document.querySelector(".item");
    const itemWidth = item.offsetWidth + parseFloat(getComputedStyle(item).marginRight);
    const sliderWidth = projets.length * itemWidth + itemWidth; // Ajout de la marge gauche pour le premier élément

    slider.value.style.width = `${sliderWidth}px`;
    pageContainer.value.style.height = `${sliderWidth - window.innerWidth + window.innerHeight}px`;
    imageWidth.value = sliderWidth / projets.length;
}

// Gestion du défilement
function handleScroll() {
    lastScroll.value = currentScroll.value;
    currentScroll.value = window.scrollY;
    target.value = currentScroll.value; // Synchronisation
}

// Gestion du redimensionnement
function handleResize() {
    initSlider();
}

// Montage du composant
onMounted(() => {
    items.value = [...document.querySelectorAll(".item")];
    initSlider();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    animate(); // Démarrer l'animation
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
/* Page et conteneur principal */
main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.slider {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    will-change: transform;
}

.slider-inner {
    position: absolute;
    top: 20%;
    height: 60%;
    display: flex;
    justify-content: space-between;
}

.item {
    flex: 0 0 auto;
    width: 40vw;
    height: 100%;
    margin-right: 10vw;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    border-radius: 5px;
}

.is-scroll-up .item {
    transform: skew(5deg);
}

.is-scroll-down .item {
    transform: skew(-5deg);
}

.is-not-scroll .item {
    transform: skew(0deg);
}

.img {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: grayscale(80%) brightness(80%);

    transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;

}



.item:hover .img {
    filter: grayscale(0%) brightness(100%);
    transform: scale(1.05);
}

.item:hover .item-container {
    transform: scale(1.1);

}


.item-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    color: white;
    transition: transform 0.3s ease-in-out;
    font-weight: 100;


}

.is-scroll-up .item-container {
    transform: translate(10px, 2px) skew(-5deg);

}

.is-scroll-down .item-container {
    transform: translate(-10px, 2px) skew(5deg);

}

.is-not-scroll .item-container {
    transform: translate(0px);
}

h3 {
    font-size: 10vw;
    text-transform: capitalize;
    text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);
    /* Ajoute une ombre au texte */
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 0;
    margin: 0;
    height: fit-content;
    line-height: 70%;


}

.tag {
    text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);

    font-size: 24px;
}



.discover {
    position: absolute;
    color: grey;
    display: flex;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
    bottom: 32px;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 300;
    transition: opacity var(--duration-opacity) ease-out;
    opacity: 1;
    z-index: 5;
}

.hide {
    opacity: 0;
}
</style>