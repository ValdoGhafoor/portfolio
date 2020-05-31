const config = {
  mode: 'universal',

  srcDir: 'src/',

  head: {
    htmlAttrs: {
      lang: 'en',
      amp: true,
    },
    meta: [
      { charset: 'utf-8' },
      {
        charset: 'utf-8',
        'http-equiv': 'Content-Type',
        content: 'text/html',
      },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no',
      },
      {
        hid: 'title',
        name: 'title',
        content: 'Valdo Ghafoor - Frontend Developer',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Native Javascript & Vue Frontend Developer working Remotely to make the world more accessible and applications more attractive.',
      },
    ],
    link: [
      { rel: 'canonical', href: 'https://valdoghafoor.com' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap',
        rel: 'stylesheet',
      },
    ],
  },

  loading: { color: '#fff' },

  css: [
    'normalize.css/normalize.css',
    '~/scss/styles/reset.scss',
    '~/scss/styles/root.scss',
  ],

  styleResources: {
    scss: '~/scss/resources/*.scss',
  },

  plugins: ['~/plugins/jsonLd'],

  buildModules: ['@nuxtjs/stylelint-module', '@nuxtjs/style-resources'],

  modules: ['@nuxtjs/axios'],

  axios: {},

  vue: {
    config: {
      devtools: !process.env.IS_DEV || process.env.IS_DEV === 'true',
    },
  },
}

export default config
