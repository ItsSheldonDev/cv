<template>
    <section id="competences" class="py-16">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">TECHNOLOGIES</span>
          <h2 class="section-title">Mes Compétences</h2>
        </div>
        
        <!-- Skills Categories -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div 
            v-for="(category, index) in cvData?.skills?.categories || defaultCategories" 
            :key="index" 
            class="card card-hover text-center p-6"
          >
            <div class="flex justify-center mb-6">
              <Icon :name="category.icon" class="w-16 h-16" :class="category.iconClass" />
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ category.title }}</h3>
            <p class="text-muted">{{ category.skills }}</p>
          </div>
        </div>
        
        <!-- Skill Bars -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <!-- Frontend Skills -->
          <div>
            <h3 class="text-xl font-semibold mb-6">Frontend</h3>
            <div class="space-y-6">
              <div 
                v-for="skill in cvData?.skills?.frontend || defaultFrontendSkills" 
                :key="skill.name"
              >
                <div class="flex justify-between mb-2">
                  <span class="font-medium">{{ skill.name }}</span>
                  <span class="text-muted">{{ skill.level }}%</span>
                </div>
                <div class="h-2 w-full bg-background-light rounded-full overflow-hidden">
                  <div 
                    class="h-full bg-gradient-primary rounded-full"
                    :style="{ width: `${skill.level}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Backend Skills -->
          <div>
            <h3 class="text-xl font-semibold mb-6">Backend</h3>
            <div class="space-y-6">
              <div 
                v-for="skill in cvData?.skills?.backend || defaultBackendSkills" 
                :key="skill.name"
              >
                <div class="flex justify-between mb-2">
                  <span class="font-medium">{{ skill.name }}</span>
                  <span class="text-muted">{{ skill.level }}%</span>
                </div>
                <div class="h-2 w-full bg-background-light rounded-full overflow-hidden">
                  <div 
                    class="h-full bg-gradient-primary rounded-full"
                    :style="{ width: `${skill.level}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Other Skills -->
        <div class="mt-16 max-w-4xl mx-auto">
          <h3 class="text-xl font-semibold mb-6 text-center">Autres Compétences</h3>
          <div class="flex flex-wrap justify-center gap-3">
            <span 
              v-for="skill in cvData?.skills?.other || defaultOtherSkills" 
              :key="skill" 
              class="badge"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const { cvData } = useCvData();
  
  // Valeurs par défaut
  const defaultCategories = [
    {
      title: 'Frontend',
      skills: 'Vue 3, Nuxt, React, Next.js, TypeScript',
      icon: 'vscode-icons:file-type-vue',
      iconClass: 'text-emerald-400'
    },
    {
      title: 'Backend',
      skills: 'Node.js, Express, NestJS, TypeScript, AdonisJS',
      icon: 'vscode-icons:file-type-typescript',
      iconClass: 'text-blue-400'
    },
    {
      title: 'Base de données',
      skills: 'MongoDB, PostgreSQL, MySQL, Redis',
      icon: 'vscode-icons:file-type-mongo',
      iconClass: 'text-green-400'
    },
    {
      title: 'DevOps',
      skills: 'Docker, CI/CD, AWS, Linux, Git',
      icon: 'simple-icons:docker',
      iconClass: 'text-blue-400'
    }
  ];
  
  const defaultFrontendSkills = [
    { name: 'Vue.js', level: 95 },
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 90 },
    { name: 'TailwindCSS', level: 85 },
    { name: 'Nuxt.js', level: 88 }
  ];
  
  const defaultBackendSkills = [
    { name: 'Node.js', level: 90 },
    { name: 'NestJS', level: 85 },
    { name: 'Express', level: 90 },
    { name: 'APIs RESTful', level: 95 },
    { name: 'GraphQL', level: 80 }
  ];
  
  const defaultOtherSkills = [
    'UI/UX Design', 'Git', 'Docker', 'AWS', 'CI/CD', 'Agile/Scrum',
    'Testing', 'Performance Optimization', 'SEO', 'Mobile-First',
    'Responsive Design', 'Progressive Web Apps'
  ];
  </script>