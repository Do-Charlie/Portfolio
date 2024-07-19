<template>
    <div class="page-container">
        <IndexHeader></IndexHeader>
    <IndexHeroBanner></IndexHeroBanner>
    <div class="test">
    test {{ myStore.theme }}

</div>
    <IndexAnimation></IndexAnimation>
    </div>

</template>


<script setup>

import { useMyStore } from '~/stores/myStore.js';
const myStore=useMyStore();


</script>

<style scoped>
.page-container{
}


.test{
    min-height: 200vh;
}




</style>