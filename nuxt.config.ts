// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@primevue/nuxt-module'
  ],
  content: {
    // content モジュールの設定
    highlight: {
      theme: 'github-dark'
    }
  },
  primevue: {
    options: {
        theme: {
            preset: Aura
        }
    }
  },
  routeRules: {
    '/': { prerender: true }
  },
  compatibilityDate: '2024-12-18'
})