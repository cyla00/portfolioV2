<script lang="ts">
import { defineComponent } from 'vue'
import AddProject from '../components/AddProject.vue'

export default defineComponent({
    components: {
        AddProject,
    }
})
</script>


<template>
    <div>
        <h1>admin</h1>
        <AddProject/>
    </div>
</template>

<style>

</style>