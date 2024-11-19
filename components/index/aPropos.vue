<template>
    <div class="container fadeup">
        <ProjetSeparator text="A propos"></ProjetSeparator>

        <p class="description">
            Je suis développeur Full Stack diplômé d'école d'ingénieur certifié par l'état. <br>
            D'abord freelance en parallèle de mes études , je suis maintenant développeur Freelance Full Stack depuis 3
            ans disponible à plein temps.
        </p>

        <nav>
            <ul>
                <li class="pointer" :class="{ select: menu == 0 }" @click="scrollToSection(0)">
                    [ Compétences ]
                </li>
                <li class="pointer" :class="{ select: menu == 1 }" @click="scrollToSection(1)">
                    [ Expériences ]
                </li>
                <li class="pointer" :class="{ select: menu == 2 }" @click="scrollToSection(2)">
                    [ Services ]
                </li>

            </ul>
        </nav>

        <div class="content ">
            <div v-if="menu == 0" class="content-container fadeInRight">
                <IndexCompetences />

            </div>
            <div v-if="menu == 1" class="content-container fadeInRight">
                <IndexExperiences></IndexExperiences>
            </div>
            <div v-if="menu == 2" class="content-container fadeInRight">
                <IndexServices></IndexServices>
            </div>
            <!-- <div class="content-container">
                <IndexContact></IndexContact>
            </div> -->
        </div>

        <ToolsObserveScroll :threshold=0 element="fadeup"></ToolsObserveScroll>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const menu = ref(0);
const contentContainer = ref(null);

function scrollToSection(sectionIndex) {
    menu.value = sectionIndex;
    const container = contentContainer.value;

    if (container) {
        const scrollAmount = sectionIndex * container.clientWidth;
        container.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    padding: 0 15vw;
    flex: 1;
    gap: 50px;
    box-sizing: border-box;
    min-height: 100lvh;
}

.description {
    text-align: center;
}

nav {
    display: flex;
    justify-content: center;
}

ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    font-weight: 100;
    font-size: 18px;
    gap: 10px;
}

li {
    cursor: pointer;
    box-sizing: border-box;
    text-wrap: nowrap;
}

li:hover {
    color: var(--second-color);
}

.select {
    color: var(--second-color);
    font-weight: 600;
}

.content {
    max-width: 70vw;
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    scroll-behavior: smooth;
    box-sizing: border-box;

}

.content>.content-container {
    min-width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    font-size: 2em;


}

.fadeInRight {
    opacity: 0;
    animation: fadeInRight 0.2s linear;
    -webkit-animation-fill-mode: forwards;
    /* Chrome 16+, Safari 4+ */
    -moz-animation-fill-mode: forwards;
    /* FF 5+ */
    -o-animation-fill-mode: forwards;
    /* Not implemented yet */
    -ms-animation-fill-mode: forwards;
    /* IE 10+ */
    animation-fill-mode: forwards;
}

.fadeup {
    transition: transform 0.5s ease-in-out, opacity 1s ease-in-out;
    opacity: 0;
    transform: translateY(100px);
}

.fadeup.is-scrolled {
    opacity: 1;
    transform: translateY(0px);
}

@keyframes fadeInRight {

    0% {
        opacity: 0;
        transform: translateX(50vw);

    }

    100% {
        opacity: 1;
        transform: translateX(0);

    }

}

@media only screen and (max-width: 768px) {

    .container {
        gap: 20px;
    }

    .description {
        font-size: 12px;
    }

    li {
        font-size: 12px;
    }

    ul {
        gap: 5px;

    }
}
</style>
