<template>
<slot> </slot>
        <div class="options-container">
            <toolsThemeSwitch></toolsThemeSwitch>
        </div>
  
</template>


<style scoped>
.options-container {
    color: white;
    position: fixed;

    right:  var(--small-padding);
    bottom:  var(--small-padding);
}
</style>