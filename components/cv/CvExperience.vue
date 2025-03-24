<template>
    <section id="experience" class="py-16">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">PARCOURS</span>
          <h2 class="section-title">Mon Expérience</h2>
        </div>
        
        <div class="max-w-3xl mx-auto">
          <div class="relative border-l border-border pl-8 space-y-12">
            <div v-for="(job, index) in experience" :key="index" class="relative">
              <!-- Dot marker -->
              <div class="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-gradient-primary"></div>
              
              <!-- Content -->
              <div class="card">
                <span class="text-muted text-sm mb-2 block">{{ job.period }}</span>
                <h3 class="text-xl font-semibold">{{ job.title }}</h3>
                <div class="text-primary font-medium mb-4">{{ job.company }}</div>
                <p class="text-muted mb-4">{{ job.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(tag, tagIndex) in job.tags" :key="tagIndex" class="badge">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Experience data
  const experience = [
    {
      period: '2022 - Présent',
      title: 'Développeur Fullstack Senior',
      company: 'Entreprise XYZ',
      description: 'Développement d\'applications web modernes avec Vue.js et NestJS. Mise en place d\'architectures scalables et optimisation des performances.',
      tags: ['Vue 3', 'TypeScript', 'NestJS', 'PostgreSQL']
    },
    {
      period: '2020 - 2022',
      title: 'Développeur Frontend',
      company: 'Startup ABC',
      description: 'Développement d\'interfaces utilisateur réactives et accessibles. Amélioration continue de l\'expérience utilisateur et refactoring de code.',
      tags: ['React', 'Next.js', 'TailwindCSS']
    },
    {
      period: '2018 - 2020',
      title: 'Développeur Web',
      company: 'Agence Web DEF',
      description: 'Création de sites web et applications sur mesure pour divers clients. Travail en équipe sur des projets variés avec différentes technologies.',
      tags: ['JavaScript', 'PHP', 'MySQL']
    }
  ];
  </script>