// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: 'Nuxt Dashboard App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Sandbox for designing  proper UTDesign Monitoring Dashboard application' },
      ],
      link: [
        { rel:'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ],
    },
  }
})
