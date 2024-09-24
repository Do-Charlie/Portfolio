<template>
        <div  class="separator fadeup" > 
          <div class="line"> </div>
        <h2> {{props.text}}</h2>
      </div>
</template>

<script setup>

const props = defineProps({
  text: String,
});
</script>

<style scoped>
.separator{
  display:flex;
  justify-content: center;
  width: 100%;
  position: relative;
  align-items: center;
}
.line{
  border-top: solid 1px var(--main-color);
  width: 100%;
  height: 1px;
  position: absolute;
  z-index: -1;
}

.separator h2{
  background: var(--background);
  width: fit-content;
  padding: 0 1vw;
  text-transform: uppercase;
  font-family: 'NeueMontrealRegular', serif; /* Police personnalisée pour les paragraphes */
  letter-spacing: 1px;
  font-weight: 100;
  font-size: 14px;
}

</style>