<template>
    <NuxtPage></NuxtPage>
</template>

<style>
body,html{
  margin: 0;
  padding: 0;
    font-family: 'Source Serif 4', serif;
  background-color: var(--background);
  color:var(--color);
  min-height: 200vh;
}


:root{


--background:#0a0a0a;
--color:#F3F3F3;
--main-color:#929CBF;
--second-color:#5C6293;
--main-color-linear: linear-gradient(90deg,var(--color) 0%, var(--color) 50%, var(--main-color) 70%,  var(--second-color) 100%);
}

/* .linear{
  background: var(--main-color-linear);
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

}

.linear:hover{
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  cursor: pointer;
  background-position:right;
  
} */

.linear{
  background: linear-gradient(90deg,var(--color) 0%, var(--color) 60%, var(--main-color) 80%,  var(--second-color) 100%);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip:text;
  width:min-content;
  transition: color  .2s ease-in-out;
    color:rgba(0,0,0,0);
  background-position:right;
      animation: no-rainbow 0.5s ease-in-out ;
    animation-fill-mode: forwards;
}
.linear:hover{
    animation: rainbow 0.5s ease-in-out ;
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