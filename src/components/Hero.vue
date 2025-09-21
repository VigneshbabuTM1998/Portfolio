<template>
  <section class="py-20 bg-gradient-to-b from-white to-slate-50">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Hi, I'm Vignesh</h1>
          <p class="text-lg mb-6">Python Full Stack Developer • Frappe, Vue.js, Django</p>
          <div class="flex gap-3">
            <a href="#projects" class="btn btn-primary">View Projects</a>
            <a href="/resume.pdf" class="btn btn-outline-secondary">Download CV</a>
          </div>
        </div>
        <div class="flex justify-center">
          <!-- placeholder avatar -->
          <div class="w-64 h-64 rounded-full bg-slate-200 flex items-center justify-center text-2xl">
            Photo
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.btn-primary{ background-color:var(--accent); border-color:var(--accent); color:white;}
</style>
