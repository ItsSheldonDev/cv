// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // Ajout du fichier CSS global
  css: ['~/assets/css/main.css'],
  
  // Configuration PostCSS pour Tailwind
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  // Autres modules
  modules: [
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/icon'
  ],
  
  // Configuration du mode couleur
  colorMode: {
    classSuffix: '',
    fallback: 'dark'
  },
  
  // Date de compatibilité
  compatibilityDate: '2025-03-24',
  
  // Configuration de l'application
  app: {
    head: {
      title: 'Mon CV Web | Développeur Fullstack',
      meta: [
        { name: 'description', content: 'CV web d\'un développeur fullstack passionné par la création d\'applications web innovantes et performantes' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap' }
      ]
    }
  }
})