<template>
  <div id="custom-cursor"><span class="circle"></span></div>

</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

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

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
  
  const hoverElements = document.querySelectorAll('a, button,.pointer');
  hoverElements.forEach(el => {
    el.addEventListener('mouseover', handleMouseOver);
    el.addEventListener('mouseout', handleMouseOut);
  });
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
  
  const hoverElements = document.querySelectorAll('a, button');
  hoverElements.forEach(el => {
    el.removeEventListener('mouseover', handleMouseOver);
    el.removeEventListener('mouseout', handleMouseOut);
  });
});
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