<script lang="ts">
import { defineComponent } from "vue"
import axios from 'axios'

export default defineComponent({
    data() {
        return{
            projects: [],
        }
    },
    methods: {
        async fetchProjects(){
            await axios.get('http://localhost:3000/api/projects').then((data) => {
                this.projects = data.data
            })
        }
    },
    mounted() {
        this.fetchProjects()
    },
})
</script>

<template>
    <div id="projects-wrapper">
            <div class="item" :key="i" v-for="i in projects" :style="{'background-image': `url(${i.image})`}">
                <h1>{{i.title}}</h1>
                <p v-if="i.project_url == 'url not available'" :style="{color: 'red', textDecoration: 'none'}">{{i.project_url}}</p>
                <div class="techstack-wrapper" :key="stack" v-for="stack in i.tech_stack">
                    <img class="stack-image" v-bind:src=stack alt="">
                </div>
                <a v-if="i.project_url !== 'url not available'" class="project-link" target="_blank" v-bind:href="`https://${i.project_url}`">View Live</a>
                <p>{{i.created_on}}</p>
            </div>  
    </div>
</template>

<style scoped>
#projects-wrapper{
    display: grid;
    grid-template-rows: 1fr;
    min-height: 90vh;
    background-color: #d9d9d9;
    padding-top: 2em;
    font-family: Archivo;
}
h1{
    color: #eeeeee;
    text-transform: capitalize;
}
.item{
    width: 300px;
    margin: auto;
    margin-bottom: 2em;
    padding: 2em;
    align-items: center;
    flex-direction: column;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 30px;
}

.project-image{
    width: 50%;
}
.project-link{
    margin: 1%;
}
.techstack-wrapper{
    display: flex;
    flex-direction: row;
}
.stack-image{
    width: 50px;  
}
</style>