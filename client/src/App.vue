<script lang="ts">
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'

export default {
  name: 'app',
  components: {
    AboutSection,
    ProjectsSection,
  }
};
</script>


<template>
  <AboutSection/>
  <ProjectsSection/>
</template>

<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #eeeeee;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
