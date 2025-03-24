<template>
    <section id="projets" class="py-16">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">PROJETS</span>
          <h2 class="section-title">Mes Réalisations</h2>
          <p class="text-muted max-w-2xl mx-auto mt-4">
            Une sélection de mes projets personnels et contributions open source.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="project in featuredProjects" 
            :key="project.id"
            class="card card-hover flex flex-col"
          >
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-lg font-semibold">{{ project.title }}</h3>
              <div class="badge flex items-center gap-1">
                <Icon :name="project.techIcon" class="w-4 h-4" />
                <span>{{ project.tech }}</span>
              </div>
            </div>
            <p class="text-muted mb-5 flex-grow">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="px-3 py-1 rounded-full text-xs bg-background text-muted"
              >
                {{ tag }}
              </span>
            </div>
            <div class="text-sm text-muted border-t border-border pt-3 flex items-center gap-4">
              <a 
                v-if="project.githubUrl" 
                :href="project.githubUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center gap-1 hover:text-primary transition-colors"
              >
                <Icon name="simple-icons:github" class="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a 
                v-if="project.demoUrl" 
                :href="project.demoUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center gap-1 hover:text-primary transition-colors"
              >
                <Icon name="heroicons:arrow-top-right-on-square" class="w-4 h-4" />
                <span>Demo</span>
              </a>
            </div>
          </div>
        </div>
        
        <div class="flex justify-center mt-12">
          <NuxtLink to="/projets" class="btn btn-secondary">
            Voir tous les projets
            <Icon name="heroicons:arrow-right" class="ml-2 w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // Featured projects
  const featuredProjects = [
    {
      id: 1,
      title: 'aloha-ss-backend',
      tech: 'TypeScript',
      techIcon: 'vscode-icons:file-type-typescript',
      description: 'Official API for Aloha-Secourisme, a training center specialized in first aid and sea rescue...',
      tags: ['api', 'backend', 'nestjs'],
      githubUrl: 'https://github.com/johndoe/aloha-ss-backend'
    },
    {
      id: 2,
      title: 'aloha-ss-frontend',
      tech: 'TypeScript',
      techIcon: 'vscode-icons:file-type-typescript',
      description: 'Official website for Aloha-Secourisme, a training center specialized in first aid and sea rescue...',
      tags: ['frontend', 'nextjs', 'react'],
      githubUrl: 'https://github.com/johndoe/aloha-ss-frontend',
      demoUrl: 'https://aloha-secourisme.com'
    },
    {
      id: 3,
      title: 'Cabane-Dashboard',
      tech: 'PHP',
      techIcon: 'vscode-icons:file-type-php',
      description: 'An admin dashboard to get stats on restaurant card QRcode scans',
      tags: ['fullstack', 'php', 'web-app'],
      githubUrl: 'https://github.com/johndoe/Cabane-Dashboard'
    }
  ];
  </script>