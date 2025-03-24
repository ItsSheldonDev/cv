<template>
    <section id="profil" class="pt-32 pb-16 md:pt-40 md:pb-24">
      <div class="container">
        <div class="flex flex-col md:flex-row items-center gap-10">
          <!-- Profile Image -->
          <div class="w-48 h-48 rounded-full bg-gradient-primary p-1 flex-shrink-0">
            <div class="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
              <img 
                v-if="cvData?.profile?.photo" 
                :src="cvData.profile.photo" 
                :alt="`Photo de ${cvData.profile.name} ${cvData.profile.firstName}`"
                class="w-full h-full object-cover"
              />
              <Icon v-else name="ph:user-circle-fill" class="w-36 h-36 text-muted" />
            </div>
          </div>
          
          <!-- Profile Info -->
          <div>
            <div class="badge mb-4">{{ cvData?.profile?.title || 'DÉVELOPPEUR FULLSTACK' }}</div>
            <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-4">
              {{ cvData?.profile?.name || 'Votre Nom' }} 
              <span class="text-gradient">{{ cvData?.profile?.firstName || 'Prénom' }}</span>
            </h1>
            <p class="text-xl text-muted max-w-2xl mb-6">
              {{ cvData?.profile?.description || 'Développeur Fullstack passionné par la création d\'applications web innovantes et performantes' }}
            </p>
            <div class="flex flex-wrap gap-4">
              <a href="#a-propos" class="btn btn-primary">
                En savoir plus
                <Icon name="heroicons:arrow-right" class="ml-2 w-5 h-5" />
              </a>
              <a href="#competences" class="btn btn-secondary">Voir mes compétences</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const { cvData } = useCvData();
  </script>