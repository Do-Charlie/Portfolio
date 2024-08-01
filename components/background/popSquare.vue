<template>
    
    <div class="container-bg">

<div class="area" >
            <ul class="circles" v-if="circleStyles">
                    <li v-for="(style,index) in circleStyles" 
                    :key="index"
                    :style="style"

                     
                     ></li>
              
                    
            </ul>
    </div >
</div>

</template>

<script setup>

const circles=ref(30);
const circleStyles = ref([]);


function getRandomInt(mini, maxi) {
    mini = Math.ceil(mini);
    maxi = Math.floor(maxi);
    return Math.floor(Math.random() * (maxi - mini + 1)) + mini;
}


// Générer les styles pour chaque cercle une fois que le composant est monté
onMounted(() => {
      // Ajoute 10 cercles supplémentaires avec un '--delay' de 0
  const additionalCircles = Array.from({ length: 5 }, () => ({
    '--size': `${getRandomInt(1, 5)}vw`,
    '--left': `${getRandomInt(1, 102)}vw`,
    '--duration': `${getRandomInt(20, 60)}s`,
    '--delay': '0s',
    '--top': `${getRandomInt(50, 100)}%`,
  }));

    circleStyles.value = Array.from({ length: circles.value }, () => ({
    '--size': `${getRandomInt(1, 5)}vw`,
    '--left': `${getRandomInt(1, 102)}vw`,
    '--duration': `${getRandomInt(20, 60)}s`,
    '--delay': `${getRandomInt(2,20)}s`,
    '--top':  `${getRandomInt(50, 100)}%`,
  }));

  // Combine les deux tableaux de styles de cercles
  circleStyles.value = [...additionalCircles, ...circleStyles.value];
});

</script>

<style scoped>
.container-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    bottom: 0;
    left: 0;
}


.area{
    width: 100%;
    height:100%;
    position: relative;
   
}

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
     /* Adding a backdrop color to ensure visibility of circles */
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(64, 73, 155, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
    width: var(--size) !important;
    height: var(--size) !important;
    left:var(--left) !important;
    animation-delay: var(--delay);
    animation-duration: var(--duration);
    top: var(--top);
    opacity: 0;
    /* box-shadow: rgba(64, 73, 155, 0.1) 0px 8px 24px, rgba(64, 73, 155, 0.1) 0px 16px 56px, rgba(64, 73, 155, 0.1) 0px 24px 80px; */

}
html[data-theme='light'] .circles li{
    background: rgba(206, 210, 248, 0.2);

}


@keyframes animate {

0%{
    transform:  rotate(0deg);
    opacity: 0;
    border-radius: 10%;
    /* top: 100%; */
}
10%{
    transform:  rotate(0deg);
    opacity: 1;
    border-radius: 20%;
    /* top: calc(100% - 50vh); */
}
90%{
    transform: rotate(300deg);
    opacity: 1;
    top: 0px;
    border-radius: 50%;
}

100%{
    transform: rotate(350deg);
    opacity: 0;
    top: -50px;
    border-radius: 50%;
}

}

</style>