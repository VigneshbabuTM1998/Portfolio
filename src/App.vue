<template>
  <div class="min-h-screen bg-white text-gray-800">
    <NavBar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  components: { NavBar, Hero, About, Projects, Contact, Footer }
}
</script>

<style>
/* global page-level styles if needed */
</style>
