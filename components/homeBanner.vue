<template>
<div class="container hero">
    <h2 class="linear"> Charlie <span >Do</span></h2>
    <div class="discover linear"> Discover</div>
</div>

</template>

<script>

</script>

<style scoped>
.home-banner{
position: relative;
}
h2{
    font-weight: 300;
    font-size: 64px;
    text-transform: uppercase;
    width: fit-content;
}
h2>span{

}
.discover{
    position: absolute;
    display:flex;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
    bottom: 32px;
    text-transform: uppercase;
    font-weight: 100;
}
</style>