<script setup>
import { onMounted, ref } from 'vue';

const demo = ref(null);

onMounted(() => {
  let delay = 0.2;

  const observer = new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${delay}s`;
          entry.target.classList.add('animate-delay');
          delay += 0.2; // increment the delay for each element
          console.log(delay)
        }else{
          entry.target.classList.remove('animate-delay');

        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  document.querySelectorAll('.demo').forEach((item) => {
    observer.observe(item);
  });
});
</script>

<template>
  <div class="container">
    <h1 class="pointer">Intersection Observer Demo</h1>
    <div class="wrapper">Scroll down a bit 👇</div>
    <div>
    <!-- this works just as easy inside a v-for loop -->
      <div class="demo">Intersection Observer in Action 👌</div>
      <div class="demo">Second Item 🤘</div>
      <div class="demo">Third Item 😎</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 120vh;
}

.wrapper {
  flex-grow: 1;
  font-size: 24px;
  height: 100vh;
}

.demo {
  padding: 20px 0px;
  font-size: 40px;
  opacity: 0;
  transform: translateY(10px);
  -webkit-transform: translateY(20px);
  -moz-transform: translateY(20px);
  -ms-transform: translateY(20px);
  -o-transform: translateY(20px);
}

.animate-delay {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: animate-delay;
}

@keyframes animate-delay {
  0% {
    opacity: 0;
    transform: translateY(10px);
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
  }
}
</style>