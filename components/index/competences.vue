<template>
    <div class="container-a-propos">
        <ul class="left"> Frontend
            <li> NuxtJs</li>
            <li> Vue.js</li>
            <li> Intégration</li>
        </ul>
        <ul class="right"> Backend
            <li>
                Laravel
            </li>
            <li>Express.js - Node.js</li>
            <li> API REST</li>
        </ul>
        <ul class="left"> Base de données
            <li>
                MySQL
            </li>
        </ul>
        <ul class="right">
            Autres
            <li> GitHub</li>
            <li> Docker</li>
            <li> Notion</li>
            <li> PHP , HTML & CSS , JS</li>

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
    color: var(--color);
    text-transform: none;

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