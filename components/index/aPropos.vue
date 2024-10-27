<template>
    <div class="container">
        <ProjetSeparator text="A propos"></ProjetSeparator>

        <p class="description">
            Je suis développeur Full Stack diplomé d'école d'ingénieur certifié par l'état.
        </p>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    padding: 0 15vw;
    flex: 1;
}

h2 {
    text-align: center;
    width: 100%;
    font-size: 5vw;
    text-transform: uppercase;
    font-weight: 300;
    color: var(--main-color);

}

.description {
    text-align: center;
    margin-top: 50px;
}
</style>