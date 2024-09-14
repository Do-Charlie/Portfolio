<template>
  <div class="container hero">
    <BackgroundPopSquare v-if="myStore.scrollY < 2000"></BackgroundPopSquare>

    <div class="content-hero">

      <div v-if="currentTitleClass" class="title-container">
        <span class="linear-title " :class="currentTitleClass"> Développeur
          <div class="fullstack">Fullstack
            <div class="tech ">
              <ToolsFlipTech></ToolsFlipTech>
            </div>
          </div>
        </span>
        <nav >
          <NuxtLink to="#projets" class="nav-link pointer">
            [ Projet ]
          </NuxtLink>
          <a class="nav-link pointer">
            [ Experience ]
          </a>
          <NuxtLink class="nav-link pointer">
            [ CV ]
          </NuxtLink>
        </nav>
      </div>



    </div>

    <div class="discover linear pointer" :class="{ 'hide': myStore.scrollY > 100 }">Scroll</div>

  </div>




</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import { useMyStore } from '~/stores/myStore.js';

const myStore = useMyStore();


const currentTitleClass = ref('');

const updateTitleClass = () => {
  // currentTitleClass.value = 'linear-title-animation';

  currentTitleClass.value = '';
  setTimeout(() => {
    currentTitleClass.value = 'tracking-in-contract';
  }, 500); // Duration of both animations combined




  setTimeout(() => {
    currentTitleClass.value = 'linear-title-animation';
  }, 2500); // Duration of both animations combined
};

const appearNav = async () => {
  // setTimeout(() => {
  //   const navLinks = document.querySelectorAll('.nav-link');
  //   navLinks.forEach((link) => {

  //     link.classList.remove('appear');
  //   });
  // }, 0); // Duration of both animations combined

  setTimeout(() => {
    if(!document) return;
    const navLinks = document.querySelectorAll('.nav-link');

    let delay = 0;
    navLinks.forEach((link) => {

      link.style.animationDelay = `${delay}s`;
      link.classList.add('appear');
      delay += 0.5; // Increment the delay for each element
    });
  }, 1500); // Duration of both animations combined


}

onMounted( async () => {
  
  //  appearNav()
  updateTitleClass();

});


watchEffect(() => {
  if (myStore.theme) {
      appearNav()



  updateTitleClass();

  }

})
// onUnmounted(() => {
//   clearInterval(interval.value);
// });

</script>

<style scoped>
.hero {
  height: 100svh;
  position: relative;
  --animation-text-duration: 2s;

}

.discover {
  position: absolute;
  display: flex;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  bottom: 32px;
  text-transform: uppercase;
  font-weight: 300;
  transition: opacity var(--duration-opacity) ease-out;
  opacity: 1;
}




.hide {
  opacity: 0;
}

.content-hero {
  display: flex;
  flex-flow: column;
  /* gap: 200px; */
  align-items: center;
  justify-content: center;
  /* padding-top: 350px; */
  height: 100%;
}



.title-container {
  display: flex;
  flex-direction: column;
  font-size: 10vw;
  font-weight: 300;
  text-transform: uppercase;
  z-index: 1;
}

.title-container nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 14px;
  gap: 30px;
  text-transform: uppercase;
}

.nav-link {
  opacity: 0;
}

.nav-link.appear {
  animation: appear 2s ease-in-out;
  animation-fill-mode: forwards;

}

.title-container>span {
  flex-direction: column;
  display: flex;
}




.fullstack {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.tech {
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;

}


.linear-title {
  background: linear-gradient(90deg, var(--main-color) 30%, var(--animation-color) 40%, var(--main-color) 60% 100%);
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  width: fit-content;
  transition: color .2s ease-in-out;
  color: rgba(0, 0, 0, 0);
  background-position: right;
  /* animation: no-rainbow 1.5s ease-in-out ; */
  /* animation-fill-mode: forwards; */

}

.linear-title-animation {
  animation: rainbow 3s ease-in-out;

}

@keyframes rainbow {
  0% {
    background-position: right
  }

  100% {
    background-position: left
  }

}

.tracking-in-contract {
  -webkit-animation: tracking-in-contract var(--animation-text-duration) cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  animation: tracking-in-contract var(--animation-text-duration) cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}


@-webkit-keyframes tracking-in-contract {
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }

  40% {
    opacity: 0.6;
  }

  100% {
    letter-spacing: normal;
    opacity: 1;
  }
}

@keyframes tracking-in-contract {
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }

  40% {
    opacity: 0.6;
  }

  100% {
    letter-spacing: normal;
    opacity: 1;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>