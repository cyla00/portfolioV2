<script lang="ts">
import { defineComponent } from 'vue'
import addProject from '../components/AddProject.vue'

export default defineComponent({
    components: {
        addProject,
    }
})
</script>


<template>
    <div>
        <h1>admin</h1>
        <addProject/>
    </div>
</template>

<style>

</style>