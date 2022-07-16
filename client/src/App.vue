<script lang="ts">
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Footer,
  }
};
</script>


<template>
  <div>
    <router-view />
    <Footer/>
  </div>
</template>

<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #eeeeee;
  text-align: center;
  color: #2c3e50;
}
</style>
