<template>
    <div class="options-container fadein">
        <div class="socials ">
            <a href="https://www.linkedin.com/in/charlie-do-3a6a07201/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="socials-icons" width="24" height="24"
                    viewBox="0 0 24 24">
                    <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>

            </a>
            <a href="https://www.malt.fr/profile/charliedo1" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" class="socials-icons malt" width="24" height="24"
                    aria-label="Malt" role="img" viewBox="0 0 512 512">
                    <rect rx="15%" />
                    <path fill="#FC5656"
                        d="m408.4 103.8c-32.5-32.4-67.1-11.4-88.8 10.2L114.8 318.8c-21.7 21.7-44.4 54.7-10.2 88.8c34.1 34.1 67 11.4 88.7-10.3l204.8-204.8c21.7-21.6 42.7-56.3 10.3-88.7zm-195.7-8.4 43.4 43.4 44.1-44.2c3-3 6-5.8 9.1-8.4c-4.6-23.3-17.9-44.4-53.3-44.4c-35.4 0-48.7 21.2-53.2 44.5c3.3 2.9 6.6 5.8 9.9 9.1zm87.5 322.1-44.1-44.1-43.4 43.3c-3.3 3.3-6.5 6.4-9.8 9.2c5 23.8 19 45.5 53.1 45.5c34.2 0 48.3-21.9 53.2-45.7c-3-2.6-6-5.2-9-8.2zm-105.9-217h-83.6c-30.7 0-70 9.7-70 55.5c0 34.3 21.9 48.3 45.8 53.2c2.8-3.2 107.8-108.7 107.8-108.7zm231.5 2.3c-2.6 3-107.9 108.8-107.9 108.8h82.4c30.7 0 70-7.3 70-55.6c0-35.3-21.1-48.6-44.5-53.2zm-204.1-29.7 14.9-14.9-43.3-43.4c-21.7-21.7-54.6-44.4-88.8-10.2c-25 25-19.4 49.4-6.2 69.1c4.1-.3 123.4-.6 123.4-.6zm68.7 165.9-15 15 44.2 44.1c21.7 21.7 56.3 42.7 88.7 10.3c24.2-24.2 18.7-49.7 5.3-70c-4.3.3-123.2.6-123.2.6z" />
                </svg>
            </a>
            <a href="mailto:charliedo.pro@gmail.com">
                <svg class="socials-icons gmail" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="52 42 88 66">
                    <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
                    <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
                    <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
                    <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
                    <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
                </svg>

            </a>

        </div>
        <toolsThemeSwitch></toolsThemeSwitch>
    </div>
</template>

<script setup>

import { useMyStore } from '~/stores/myStore.js';
const myStore = useMyStore();
</script>

<style scoped>
.options-container {
    color: white;
    position: fixed;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: var(--small-padding);
    bottom: 0;

}

.socials {

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
}

.socials.is-scrolled {}

.socials-icons {
    fill: var(--second-color);
}



.socials-icons.malt {}

.socials-icons:hover {
    fill: var(--main-color);
}

.fadein {
    opacity: 0;

    /* Durée de l'animation */
    --duration-fadein: 1s;
    --delay-fadein: 1s;
    /* Toutes les propriétés d'animation en une seule déclaration */
    animation: fadein linear var(--duration-fadein) var(--delay-fadein) forwards;

    /* Compatibilité pour Firefox, Safari, Chrome et Opera */
    -moz-animation: fadein linear var(--duration-fadein) var(--delay-fadein) forwards;
    -webkit-animation: fadein linear var(--duration-fadein) var(--delay-fadein) forwards;
    -o-animation: fadein linear var(--duration-fadein) var(--delay-fadein) forwards;
}

@keyframes fadein {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@-moz-keyframes fadein {

    /* sur Firefox */
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@-webkit-keyframes fadein {

    /* sur Safari et Chrome */
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@-o-keyframes fadein {

    /* sur Opera */
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>