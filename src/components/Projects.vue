<template>
  <section id="projects" class="py-16 bg-slate-50">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold mb-6">Projects</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <ProjectCard
          v-for="p in projects" :key="p.title"
          :title="p.title" :desc="p.desc" :link="p.link" />
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from './ProjectCard.vue'
export default {
  components:{ ProjectCard },
  data(){ return {
    projects: [
      { title: 'ERP Customization (Frappe)', desc: 'Custom doctypes, APIs, SQL reports.', link:'#' },
      { title: 'Plant Disease Detection', desc: 'Django + ML model for image classification', link:'#' }
    ]
  }}
}
</script>
