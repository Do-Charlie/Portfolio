<template>
    <header>
        <div class="title-logo-container">
            <NuxtLink to="/" class="linear title-logo"> Charlie Do</NuxtLink>

        </div>
        <nav>
            <NuxtLink to="/" class="linear "> Projets</NuxtLink>
            <NuxtLink to="/" class="linear "> CV</NuxtLink>
            <NuxtLink to="/" class="linear "> Contact</NuxtLink>
            <NuxtLink to="/" class="linear "> Lang</NuxtLink>

        </nav>
    </header>

</template>

<script setup>


</script>

<style scoped>
header {
    padding: var(--small-padding);
    position: fixed;
    width: 100vw;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-between;
    z-index: 100;
    box-sizing: border-box;
}
.title-logo-container{
    position: relative;

}

.title-logo {
    position: absolute;
    top: 0px;
    font-size: 70px;
    font-weight: 100;
    text-wrap: nowrap;
    text-transform: uppercase;
    word-spacing: 10px;


}

nav{
    display:flex;
    flex-flow: row nowrap;
    gap: 20px;
    font-weight: 100;
    text-transform: uppercase;
}

nav a:hover{
    font-weight: 300;
}
</style>