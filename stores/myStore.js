// stores/myStore.js
import { defineStore } from 'pinia'

export const useMyStore = defineStore('myStore', {
  state: () => ({
    theme: 'light',
    layout: 'default',
    scrollY: 0,
    refreshHoverCursor: false, //Refresh le cursor et les elements survolés

  }),
  getters: {
  },
  actions: {
    scrollTo(id) {
      const el = document.getElementById(id);
      el.scrollIntoView({ behavior: "smooth" });
    },

   
  },
});
