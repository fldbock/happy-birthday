// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxtjs/tailwindcss', 'nuxt-auth-utils'],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true }
})