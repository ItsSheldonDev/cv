<template>
    <section id="formation" class="py-16">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">FORMATION</span>
          <h2 class="section-title">Mon Parcours Académique</h2>
        </div>
        
        <div class="max-w-3xl mx-auto">
          <div class="relative border-l border-border pl-8 space-y-12">
            <div v-for="(edu, index) in education" :key="index" class="relative">
              <!-- Dot marker -->
              <div class="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-gradient-primary"></div>
              
              <!-- Content -->
              <div class="card">
                <span class="text-muted text-sm mb-2 block">{{ edu.period }}</span>
                <h3 class="text-xl font-semibold">{{ edu.degree }}</h3>
                <div class="text-primary font-medium mb-4">{{ edu.institution }}</div>
                <p class="text-muted">{{ edu.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Education data
  const education = [
    {
      period: '2016 - 2018',
      degree: 'Master en Développement Web',
      institution: 'Université de Technologie',
      description: 'Spécialisation en développement d\'applications web et mobiles. Projets académiques sur les architectures modernes et les frameworks JS.'
    },
    {
      period: '2013 - 2016',
      degree: 'Licence en Informatique',
      institution: 'Université des Sciences',
      description: 'Formation en informatique générale avec une spécialisation en développement logiciel et algorithmes.'
    }
  ];
  </script>