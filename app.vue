<template>
  <div id="app">
    <NuxtLayout :name="myStore.layout || 'default'">
    <NuxtPage></NuxtPage>
  </NuxtLayout>
  <ToolsCursor></ToolsCursor>
  </div>
</template>

<script setup>
import { useMyStore } from '~/stores/myStore.js';
const myStore=useMyStore();

const handleScroll = () => {
  myStore.scrollY=window.scrollY;

  };
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

</script>

<style>

body,html,*{
  margin: 0;
  padding: 0;
    font-family: 'Source Serif 4', serif;
    box-sizing: border-box;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
     cursor: none; 
     scroll-behavior: smooth;

}



body::-webkit-scrollbar,html::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}

a, a:link, a:visited, a:focus, a:hover, a:active{
  cursor: none ;
}


:root{
--background:#0a0a0a;
--color:#d6d2d2;
--main-color:#929CBF;
--second-color:#5C6293;
--animation-color:#1f2a52;
--main-color-linear: linear-gradient(90deg,var(--color) 0%, var(--color) 50%, var(--main-color) 70%,  var(--second-color) 100%);
--small-padding:1.5vw;
--duration-opacity:1s;
--padding-width:0px 10vw;
}




html[data-theme='light'] {
  --background: rgb(245, 244, 241);
  --color:#0a0a0a;

  --animation-color:#1b2b64;

}

html[data-theme='dark'] {
  --background:#0a0a0a;
--color:#d6d2d2;

--animation-color:#1f2a52;

}


body{
  transition: background-color var(--duration-opacity), color var(--duration-opacity);

  background-color: var(--background);
  color:var(--color);
} 
a{
  color:var(--main-color) ;
  text-decoration: none;

}

a:hover{
  color: var(--color);
}

.linear{
  color:var(--main-color);
  transition: color  .2s ease-in-out;
}
.linear:hover{
   color: var(--color);

}





</style>