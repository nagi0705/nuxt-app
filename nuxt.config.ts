// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  },
  nitro: {
    preset: 'vercel' // netlifyからvercelに変更
  },
  ssr: true, // SSRを有効化
  app: {
    head: {
      title: 'Nuxt App',
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3'}
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  }
})