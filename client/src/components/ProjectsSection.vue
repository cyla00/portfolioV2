<script lang="ts">
import { defineComponent } from "vue"
import axios from 'axios'

export default defineComponent({
    data() {
        return{
            projects: [],
            display: 'flex',
            index: 0,
        }
    },
    methods: {
        async fetchProjects(){
            await axios.get('http://localhost:3000/api/projects').then((data) => {
                this.projects = data.data
            })
        },
        next(){
            this.index ++
        },
        back(){
            this.index --
        }
    },
    mounted() {
        this.fetchProjects()
    },
})
</script>

<template>
    <div id="projects-wrapper">
        <h1>Some Of My Projects</h1>



        <div id="slider">
            <div class="item" :key="i" v-for="i in projects" :style="{display: display}">
                <h1>{{i.title}}</h1>
                <img class="project-image" v-bind:src=i.image alt="">
                <a v-if="i.project_url == 'url not available'" href="/">{{i.project_url}}</a>
                <a v-if="i.project_url !== 'url not available'" class="project-link" target="_blank" v-bind:href="`https://${i.project_url}`">View Live</a>
                <div class="techstack-wrapper" :key="stack" v-for="stack in i.tech_stack">
                    <img class="stack-image" v-bind:src=stack alt="">
                </div>
            </div>  
        </div>

        <button id="next" @click="next()">next</button>
        <button id="back" @click="back()">back</button>
    </div>
</template>

<style scoped>

#projects-wrapper{
    background: #eeeeee;
    margin: auto;
    overflow: hidden;
    height: 100vh;
}

#projects-wrapper h1{
    color: #0D7377;
}

#slider{
    overflow: hidden;
}

.item{
    position: relative;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.project-image{
    width: 90%;
}
.project-link{
    margin: 1%;
}
.techstack-wrapper{
    display: flex;
}
.stack-image{
    width: 40px;  
}
</style>