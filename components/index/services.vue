<template>
    <div class="container-a-propos">


        <ul class="left"> Site Vitrine
            <li> Nuxt.js - SEO</li>

        </ul>
        <ul class="right"> Application Web
            <li>
                Laravel - Vue.js
            </li>

        </ul>
        <ul class="left"> API REST

            <li> Laravel - Express.js</li>
        </ul>
        <ul class="right">
            Intégrations
            <li>Figma -> Nuxt.js </li>

        </ul>
        <ul class="left"> Migrations
            <li> PHP X -> PHP Y</li>
            <li> Vue 2 -> Vue3</li>
        </ul>
        <ul class="left"> Modifications & Fix
            <li> PHP - Laravel</li>
            <li>Nuxt.js - HTML&CSS</li>
        </ul>
        <ul class="left"> Hébergements & DNS
            <li> Ionos - Cloudflare</li>
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