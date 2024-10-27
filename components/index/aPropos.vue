<template>
    <div class="container fadeup">
        <ProjetSeparator text="A propos"></ProjetSeparator>

        <p class="description">
            Je suis développeur Full Stack diplômé d'école d'ingénieur certifié par l'état.
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
                <li class="pointer" :class="{ select: menu == 3 }" @click="scrollToSection(3)">
                    [ Contact ]
                </li>
            </ul>
        </nav>

        <div class="content" ref="contentContainer">
            <div class="content-container">
                <IndexCompetences />
            </div>
            <div class="content-container">
                <IndexExperiences></IndexExperiences>
            </div>
            <div class="content-container">
                <IndexServices></IndexServices>
            </div>
            <div class="content-container">
                <IndexContact></IndexContact>
            </div>
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
}

li {
    padding: 2px 10px;
    cursor: pointer;
}

li:hover {
    color: var(--second-color);
}

.select {
    color: var(--second-color);
    font-weight: 600;
}

.content {
    width: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    scroll-behavior: smooth;
    height: 100vh;
    box-sizing: border-box;

}

.content>.content-container {
    min-width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    font-size: 2em;

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
</style>
