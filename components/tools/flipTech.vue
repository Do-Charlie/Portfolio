<template>
<div class="flip-1">
    <NuxtImg src="/techs/nuxt.png"></NuxtImg>
</div>
</template>

<script setup>

const techs = [
  {
    src: "/techs/nuxt.png",
    title: "Projet 1",
    alt: "Description de l'image 1"
  },
  {
    src: "/techs/vue.png",
    title: "Projet 2",
    alt: "Description de l'image AFFEZA"
  },
];
</script>

<style scoped>

img{
    width: 7vw;
    height: auto;
    fill: cover;
}

.flip-1 {
	-webkit-animation: flip-1 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
	        animation: flip-1 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}

.flip-2 {
	-webkit-animation: flip-2 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
	        animation: flip-2 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}
 @-webkit-keyframes flip-1 {
  0% {
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
  }
  100% {
    -webkit-transform: rotateX(-180deg);
            transform: rotateX(-180deg);
  }
}
@keyframes flip-1 {
  0% {
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
  }
  100% {
    -webkit-transform: rotateX(-180deg);
            transform: rotateX(-180deg);
  }
}



 @-webkit-keyframes flip-2 {
  0% {
    -webkit-transform: rotateX(-180deg);
            transform: rotateX(-180deg);
  }
  100% {
    -webkit-transform: rotateX(-360deg);
            transform: rotateX(-360deg);
  }
}
@keyframes flip-2 {
  0% {
    -webkit-transform: rotateX(-180deg);
            transform: rotateX(-180deg);
  }
  100% {
    -webkit-transform: rotateX(-360deg);
            transform: rotateX(-360deg);
  }
}

</style>