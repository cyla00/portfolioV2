<script lang="ts">
export default{
    data() {
        return{
            projects: [],
            slideIndex: 0,
        }
    },
    mounted() {
        this.fetchProjects();
    },
    methods: {
        fetchProjects: () => {
            // call the api with json content
        },
        next: (slideIndex) => {
            slideIndex += 1
        },
        back: (slideIndex) => {
            slideIndex -= 1  
        },
    },
}
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