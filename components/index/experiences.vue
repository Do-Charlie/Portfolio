<template>
    <div class="container-a-propos">
        <ul class="left"> Rcarré
            <li> 2024</li>
            <li> Laravel - Vue.js</li>
            <li> Web Application de Planning </li>
            <li>API - EWS</li>
        </ul>

        <ul class="left"> Agence Kameo
            <li> 2023 - 2024</li>
            <li> Intégration - Site Vitrine</li>
            <li> Hébergements</li>
            <li> Nuxt.js</li>
        </ul>
        <ul class="right"> Nexus
            <li>
                2023
            </li>
            <li>Site</li>
            <li> Nuxt.js - Express.js</li>
        </ul>
        <ul class="left"> ISI-Niceweb
            <li>
                2022 - 2023
            </li>
            <li>
                Interface Web
            </li>
            <li> Facturations</li>
            <li> PHP</li>
        </ul>
        <ul class="right">
            Boston SARL
            <li> 2020</li>
            <li> Web Application</li>
            <li> Suivie de Factures</li>
            <li> PHP</li>

        </ul>

    </div>
</template>

<script setup>

</script>

<style scoped>
.container-a-propos {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    gap: 50px;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 40%;
    font-weight: 300;
    font-size: 18px;
    color: var(--second-color);
    gap: 10px;
    max-width: 400px;
    min-width: 200px;
    text-transform: uppercase;
}

li {
    font-weight: 100;
    text-transform: none;

    color: var(--color);
}

ul:nth-child(2n) {
    justify-content: flex-end;
    align-items: flex-end;
}

@media only screen and (max-width: 768px) {
    .container-a-propos {
        gap: 10px;
    }

    ul {

        font-size: 12px;
        gap: 5px;
    }

    li {
        font-size: 10px;
    }

}
</style>