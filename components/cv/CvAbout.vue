<template>
    <section id="a-propos" class="py-16">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">À PROPOS</span>
          <h2 class="section-title">Qui suis-je ?</h2>
        </div>
        
        <div class="max-w-3xl mx-auto">
          <div class="prose prose-lg prose-invert mx-auto">
            <p v-if="cvData?.about?.description" class="text-lg text-muted text-center">
              {{ cvData.about.description }}
            </p>
            <p v-else class="text-lg text-muted text-center">
              Développeur passionné avec plus de X ans d'expérience dans la création d'applications web modernes.
              Spécialisé dans les écosystèmes Vue.js et React, avec une forte expertise en développement backend avec Node.js.
              Je m'épanouis dans la création de solutions complètes, de l'architecture à l'implémentation.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div 
                v-for="(stat, index) in cvData?.about?.stats || defaultStats" 
                :key="index" 
                class="card text-center p-6"
              >
                <div class="text-primary text-4xl font-bold mb-2">{{ stat.value }}</div>
                <div class="text-sm text-muted">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const { cvData } = useCvData();
  
  // Valeurs par défaut au cas où les données ne sont pas chargées
  const defaultStats = [
    { value: "X+", label: "Années d'expérience" },
    { value: "Y+", label: "Projets réalisés" },
    { value: "Z+", label: "Clients satisfaits" }
  ];
  </script>