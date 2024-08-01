// stores/myStore.js
import { defineStore } from 'pinia'

export const useMyStore = defineStore('myStore', {
  state: () => ({
    theme:'light',
   layout:'default',
   scrollY:0,
  }),
  getters: {
  },
  actions: {


  }
})
