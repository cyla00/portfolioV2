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
            <div class="item" :key="i" v-for="i in projects">
                <h1>{{i.title}}</h1>
                <img class="project-image" v-bind:src=i.image alt="">
                <div id="techstack-wrapper">
                    <div class="img-container" :key="stack" v-for="stack in i.tech_stack">
                    <img class="stack-image" v-bind:src=stack alt="">
                </div>
                </div>
                <p v-if="i.project_url == 'url not available'" :style="{color: 'red', textDecoration: 'none'}">{{i.project_url}}</p>
                <a v-if="i.project_url !== 'url not available'" :style="{color: '#66ff66', textDecoration: 'none'}" class="project-link" target="_blank" v-bind:href="`https://${i.project_url}`">View Live</a>
            </div>
    </div>
</template>

<style scoped>
#projects-wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    height: 100%;
    background-color: #d9d9d9;
    padding-top: 2em;
    font-family: Archivo;
}
h1{
    color: #eeeeee;
    text-transform: capitalize;
    font-size: 1em;
}
.item{
    width: 380px;
    height: 500px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2em;
    align-items: center;
    flex-direction: column;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 25px;
    border: solid #212121;
    display: grid;
    grid-template-rows: 10% 60% 10% 20%;
    box-shadow: 8px 8px #32E0C4;
    background: #212121;
    overflow: hidden;
}

.project-image{
    width: 100%;
}
.project-link{
    margin: 1%;
}
#techstack-wrapper{
    display: flex;
    flex-direction: row;
    text-align: center;
    width: 100%;
}
.stack-image{
    text-align: center;
    width: 80px; 
    margin: auto;
}
.img-container{
    width: 100%;
}
#date{
    color: #eeeeee;
}
</style>