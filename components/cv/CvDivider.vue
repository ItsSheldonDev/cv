<template>
    <div class="container">
      <div class="divider relative">
        <div v-if="showIcon" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
          <Icon :name="icon" class="w-6 h-6 text-muted" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    icon: {
      type: String,
      default: 'heroicons:code-bracket'
    },
    showIcon: {
      type: Boolean,
      default: true
    }
  });
  </script>