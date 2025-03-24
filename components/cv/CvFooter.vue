<template>
    <footer class="bg-background py-10 border-t border-border">
      <div class="container">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-center md:text-left mb-6 md:mb-0">
            <NuxtLink to="/" class="text-2xl font-bold text-primary mb-2 inline-block">SH.</NuxtLink>
            <p class="text-muted">Développeur Fullstack passionné</p>
          </div>
          
          <!-- Social Links -->
          <div class="flex gap-4 mb-6 md:mb-0">
            <a 
              v-for="social in socialLinks" 
              :key="social.label"
              :href="social.href"
              class="bg-background-light p-3 rounded-lg text-muted hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              :title="social.label"
            >
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>
          
          <div class="text-center md:text-right">
            <p class="text-sm text-muted">
              © {{ new Date().getFullYear() }} - Tous droits réservés
            </p>
            <p class="text-sm text-muted mt-1">
              Fait avec <span class="text-red-500">❤️</span> à Angoulême, France
            </p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  // Social links
  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/johndoe',
      icon: 'simple-icons:github'
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/johndoe',
      icon: 'simple-icons:linkedin'
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/johndoe',
      icon: 'simple-icons:twitter'
    }
  ];
  </script>