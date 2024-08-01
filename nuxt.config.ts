export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", '@pinia/nuxt', "@nuxt/image"],
  
  googleFonts: {
    families: {
      'Source+Serif+4': {
        wght: [100,200, 300, 400, 500, 600, 700, 800, 900],
        ital: [200, 300, 400, 500, 600, 700, 800, 900],
        opsz: [8, 60]
      }
    },
    display: 'swap',
    preload: true,

  }
})