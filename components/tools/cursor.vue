<template>
  <div id="custom-cursor"><span class="circle"></span></div>

</template>

<script setup>
import { onMounted, onUnmounted,watchEffect } from 'vue';
import { useMyStore } from '~/stores/myStore.js';

const myStore = useMyStore();
const handleMouseMove = (e) => {
  const cursor = document.getElementById('custom-cursor');
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
};

const handleMouseOver = () => {
  const cursor = document.getElementById('custom-cursor');
  cursor.classList.add('hover');
};

const handleMouseOut = () => {
  const cursor = document.getElementById('custom-cursor');
  cursor.classList.remove('hover');
};

const refreshHoverListeners = () => {
    // Supprimez les anciens événements pour éviter des duplications
    const oldHoverElements = document.querySelectorAll('a, button, .pointer');
    oldHoverElements.forEach(el => {
      el.removeEventListener('mouseover', handleMouseOver);
      el.removeEventListener('mouseout', handleMouseOut);
    });

    // Ajouter les événements aux nouveaux éléments avec la classe 'pointer'
    const hoverElements = document.querySelectorAll('a, button, .pointer');
    hoverElements.forEach(el => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });

    // Supprimer les événements pour les éléments sans la classe 'pointer'
    const allElements = document.querySelectorAll('.no-pointer');
    allElements.forEach(el => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      
    });

    // Log uniquement les éléments ayant la classe 'pointer' après mise à jour
    console.log('Updated hoverElements:', hoverElements);
  };


onMounted(() => {
 
  // Rafraîchit toutes les 2 secondes (2000ms)
  // const interval = setInterval(refreshHoverListeners, 10000);
  refreshHoverListeners()
  // Ajoutez le listener au mouvement de la souris (s'il est nécessaire)
  window.addEventListener('mousemove', handleMouseMove);

  // Ne pas oublier de nettoyer l'intervalle et les écouteurs d'événements lors de la destruction du composant
  onBeforeUnmount(() => {
    // clearInterval(interval); // Arrêter de rafraîchir
    window.removeEventListener('mousemove', handleMouseMove);

    // Supprimer les événements des éléments encore présents
    const hoverElements = document.querySelectorAll('a, button, .pointer');
    hoverElements.forEach(el => {
      el.removeEventListener('mouseover', handleMouseOver);
      el.removeEventListener('mouseout', handleMouseOut);
    });
  });
});

watchEffect(()=>{
  if(myStore.refreshHoverCursor){
    refreshHoverListeners();
    myStore.refreshHoverCursor=false;
  }
})


</script>

<style scoped>


.discover {
  position: absolute;
  display: flex;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  bottom: 32px;
  text-transform: uppercase;
  font-weight: 100;
  transition: opacity 1s ease-out;
}

.hide {
  opacity: 0;
}

#custom-cursor {
    --animation-duration-cursor:0.3s;
  position: fixed;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(92, 98, 147, 0.9);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition:  box-shadow var(--animation-duration-cursor) ease-out,width var(--animation-duration-cursor) ease-out,height var(--animation-duration-cursor) ease-out;
  box-shadow: 0px 0px 12px rgba(151, 151, 243, 0.3);

}
html[data-theme='light'] #custom-cursor{
    box-shadow: 0px 0px 5px rgba(92, 98, 147, 1);
    border: 1px solid rgba(92, 98, 147, 0.3);
}

#custom-cursor .circle{
    position: fixed;
    left: 50%;
    top: 50%;
  width: 5px;
  height: 5px;
  background-color: rgba(92, 98 ,147, 0.8);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: width var(--animation-duration-cursor) ease-in-out,height var(--animation-duration-cursor) ease-in-out, background-color var(--animation-duration-cursor) ease-in-out;

}


#custom-cursor.hover {
  /* transform: scale(2); */
  width: 50px;
  height: 50px;
}

#custom-cursor.hover .circle {
  /* transform: scale(2); */
  width: 30px;
  height: 30px;
  background-color: rgba(92, 98, 147, 0.2);

}
html[data-theme='light'] #custom-cursor.hover .circle{
    background-color: rgba(92, 98, 147, 0.2);

}

</style>