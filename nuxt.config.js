export default {
  mode: 'universal',
  head: {
    title: 'Valdo Ghafoor - Web Developper',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: '#fff' },

  css: [],

  plugins: ['~/plugins/jsonLd'],

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/stylelint-module'],

  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv'],

  axios: {},

  vue: {
    config: {
      devtools: !process.env.IS_DEV || process.env.IS_DEV === 'true'
    }
  }
}
