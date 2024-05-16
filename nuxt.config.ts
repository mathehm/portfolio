// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxtjs/google-fonts',
    '@vesp/nuxt-fontawesome',
    '@nuxt/eslint',
    '@nuxthub/core',
  ],
  googleFonts: {
    families: {
      'Nunito Sans': true,
    },
  },
  fontawesome: {
    icons: {
      solid: ['envelope'],
      brands: ['github', 'linkedin', 'whatsapp', 'html5', 'css3', 'js', 'vuejs', 'node'],
    },
  },
  runtimeConfig: {
    public: {
      NUXT_GITHUB_AUTH: process.env.NUXT_GITHUB_AUTH,
    },
  },
})
