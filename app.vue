<template>
  <div id="app">
    <NuxtLayout :name="myStore.layout">
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
--main-color-linear: linear-gradient(90deg,var(--color) 0%, var(--color) 50%, var(--main-color) 70%,  var(--second-color) 100%);

--small-padding:1.5vw;
--duration-opacity:1s;
--padding-width:0px 10vw;
}




html[data-theme='light'] {
  --background: rgb(245, 244, 241);
  --color:#0a0a0a;
}




body{
  transition: background-color var(--duration-opacity), color var(--duration-opacity);

  background-color: var(--background);
  color:var(--color);
} 

.linear{
  background: linear-gradient(90deg,var(--color) 0%, var(--color) 60%, var(--main-color) 80%,  var(--second-color) 100%);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip:text;
  width:fit-content;
  transition: color  .2s ease-in-out;
    color:rgba(0,0,0,0);
  background-position:right;
      animation: no-rainbow 0.3s ease-in-out ;
    animation-fill-mode: forwards;
}
.linear:hover{
    animation: rainbow 0.3s ease-in-out ;
    animation-fill-mode: forwards;

}




@keyframes rainbow { 
    0%{background-position:right}
    100%{background-position:left}

}

@keyframes no-rainbow { 
    0%{background-position:left}
    100%{background-position:right}

}


</style>