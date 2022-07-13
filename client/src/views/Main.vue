<script lang="ts">
import AboutSection from '../components/AboutSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'

export default {
  name: 'app',
  components: {
    AboutSection,
    ProjectsSection,
  }
};
</script>


<template>
  <div id="main-page">
    <AboutSection/>
    <ProjectsSection/>
  </div>
</template>

<style>
</style>