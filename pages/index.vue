<template>
    <div class="min-h-screen bg-background text-white">
      <CvHeader :sections="sections" />
      
      <main>
        <CvHero />
        
        <CvDivider icon="heroicons:user" />
        
        <CvAbout />
        
        <CvDivider icon="heroicons:code-bracket" />
        
        <CvSkills />
        
        <CvDivider icon="heroicons:briefcase" />
        
        <CvExperience />
        
        <CvDivider icon="heroicons:academic-cap" />
        
        <CvEducation />
        
        <CvDivider icon="heroicons:code-bracket-square" />
        
        <CvProjects />
      </main>
      
      <CvFooter />
    </div>
  </template>
  
  <script setup>
  import CvHeader from '~/components/cv/CvHeader.vue';
  import CvHero from '~/components/cv/CvHero.vue';
  import CvAbout from '~/components/cv/CvAbout.vue';
  import CvSkills from '~/components/cv/CvSkills.vue';
  import CvExperience from '~/components/cv/CvExperience.vue';
  import CvEducation from '~/components/cv/CvEducation.vue';
  import CvProjects from '~/components/cv/CvProjects.vue';
  import CvFooter from '~/components/cv/CvFooter.vue';
  import CvDivider from '~/components/cv/CvDivider.vue';
  
  // Navigation sections
  const sections = [
    { id: 'profil', label: 'Profil' },
    { id: 'a-propos', label: 'À propos' },
    { id: 'competences', label: 'Compétences' },
    { id: 'experience', label: 'Expérience' },
    { id: 'formation', label: 'Formation' },
    { id: 'projets', label: 'Projets' }
  ];
  </script>