<template>
    <header class="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-md border-b border-border z-50">
      <div class="container flex justify-between items-center py-5">
        <!-- Logo SVG -->
        <NuxtLink to="/" class="w-20 h-20">
          <img src="/sh.svg" alt="Logo SH" class="w-full h-full" />
        </NuxtLink>
        
        <!-- Navigation -->
        <nav class="hidden md:block">
          <ul class="flex gap-8">
            <li v-for="(section, index) in sections" :key="index">
              <a 
                :href="`#${section.id}`" 
                class="opacity-80 hover:opacity-100 hover:text-primary transition-all"
              >
                {{ section.label }}
              </a>
            </li>
          </ul>
        </nav>
        
        <!-- Actions -->
        <div class="flex items-center gap-4">
          <!-- Download CV button -->
          <button class="hidden md:flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-border hover:bg-card hover:text-primary transition-all">
            <Icon name="heroicons:document-arrow-down" class="w-4 h-4" />
            <span>Télécharger CV</span>
          </button>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  defineProps({
    sections: {
      type: Array,
      required: true
    }
  });
  </script>