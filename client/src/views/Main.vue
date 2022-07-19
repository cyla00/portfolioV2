<script lang="ts">
import AboutSection from '../components/AboutSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import Aboutme from '../components/Aboutme.vue'

export default {
  name: 'app',
  components: {
    AboutSection,
    ProjectsSection,
    Aboutme,
  }
};
</script>


<template>
  <div id="main-page">
    <AboutSection/>
    <Aboutme/>
    <ProjectsSection/>
  </div>
</template>

<style>
</style>