<script lang="ts">
import AboutSection from '../components/AboutSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import Aboutme from '../components/Aboutme.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'app',
  components: {
    AboutSection,
    ProjectsSection,
    Aboutme,
    Footer,
  }
};
</script>


<template>
  <div id="main-page">
    <AboutSection/>
    <Aboutme/>
    <ProjectsSection/>
    <Footer/>
  </div>
</template>

<style>
</style>