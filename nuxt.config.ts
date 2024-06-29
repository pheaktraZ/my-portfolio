// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Sopheaktra - Portfolio',
    },
    meta: [
      {charset: 'utf-8'},
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {hid: 'description', name: 'description', content: ''},
    ],
  },
  plugins: [
    '~/plugins/bootstrap.client.ts'
  ],
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css' // Optional, if you want to use Bootstrap Icons
  ],
  build: {
    transpile: ['bootstrap']
  }
})
