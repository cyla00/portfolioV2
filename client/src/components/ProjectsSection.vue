<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return{
            projects: [],
            slideIndex: 0,
        }
    },
    methods: {
        fetchProjects: () => {
            // call api obj
        },
        next: (slideIndex :number) => {
            slideIndex += 1
        },
        back: (slideIndex :number) => {
            slideIndex -= 1  
        },
    },
    mounted() {
        this.fetchProjects();
    },
})
</script>

<template>
    <div id="projects-wrapper">
        <h1>Some Of My Projects</h1>
        <div id="slider">

            <div class="item">
                <h1>here is title 1</h1>
                <img src="" alt="">
                <a href="">here the link to site</a>
                <div id="slider-techstack">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
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

</style>