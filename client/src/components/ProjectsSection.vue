<script lang="ts">
import { defineComponent } from "vue"
import axios from 'axios'

export default defineComponent({
    data() {
        return{
            projects: [],
            slideIndex: 0,
        }
    },
    methods: {
        async fetchProjects(){
            await axios.get('http://WIN-7OOIKM6PDBD:3000/api/projects').then((data) => {
                this.projects = data.data
                console.log(this.projects[0])
            })
        },
        next(slideIndex :number){
            this.slideIndex += 1
        },
        back(slideIndex :number){
            slideIndex -= 1  
        },
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

            <div class="item" v-bind:key="i" v-for="i in projects">
                <h1>{{i.title}}</h1>
                <img v-bind:src=i.image alt="">
                <a href="{{i.project_url}}">{{i.project_url}}</a>
                <div id="slider-techstack" v-bind:key="stack" v-for="stack in i.tech_stack">
                    <img v-bind:src=stack alt="">
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
}

#projects-wrapper h1{
    color: #0D7377;
}

img{
    width: 40px;
}
</style>