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
<div id="main">
    <h1 id="main-title">some of my projects</h1>
    <div id="projects-wrapper">
            <div class="item" :key="i" v-for="i in projects">
                <div class="band"> 
                    <div class="btn" :style="{'background': '#FF605C'}"></div>
                    <div class="btn" :style="{'background': '#FFBD44'}"></div>
                    <div class="btn" :style="{'background': '#00CA4E'}"></div>
                </div>
                <div class="image-wrapper">
                    <img v-bind:src=i.image alt="" class="project-image">
                </div>
                <h1 class="card-title">{{i.title}}</h1>
                <div id="techstack-wrapper">
                    <div class="img-container" :key="stack" v-for="stack in i.tech_stack">
                        <img class="stack-image" v-bind:src=stack alt="">
                    </div>
                </div>
                <div class="link_wrapper">
                    <a  v-if="i.project_url == 'url not available'" :style="{color: '#FF605C', textDecoration: 'none'}">{{i.project_url}}</a>
                    <a  v-if="i.project_url !== 'url not available'" :style="{color: '#66ff66', textDecoration: 'none'}" class="project-link" target="_blank" v-bind:href="`https://${i.project_url}`">View Live</a>
                </div>
            </div>
    </div>
    <div id="contact">
        <p>Contact me<br>paperdev@agencepapercode.com</p>
    </div>
</div>
    
</template>

<style scoped>
#main{
    background: #212121;
    color: #0D7377;
    text-align: center;
    height: 100%;
}

#main-title{
    font-size: 2.5em;
    color: #0D7377;
    font-family: Archivo;
    display: flex;
    justify-content: center;
}

#projects-wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    height: 100%;
    background: #212121;
    padding-top: 2em;
    font-family: Kanit;
}
h1{
    color: #eeeeee;
    text-transform: uppercase;
    font-size: 1.4em;
    margin: auto;
    display: flex;
    justify-content: center;
}
.item{
    width: 400px;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2em;
    flex-direction: column;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: solid #eeeeee 1px;
    background-color: #1a1a1a;
    border-radius: 5px;
}
.image-wrapper{
   overflow: hidden;
   height: 40%;
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
    margin: auto;
}
.card-title{
    margin-bottom: 5%;
}
.stack-image{
    text-align: center;
    height: 40px; 
    margin: auto;
}
.img-container{
    width: 100%;
}
#date{
    color: #eeeeee;
}
a{
    font-weight: 900;
    margin: auto;
    border: solid rgba(195, 195, 195, 0.5) 2px ;
    width: 50%;
    padding: 2%;
    display: block;
    border-radius: 100px;
}
a:hover{
    background: rgba(50, 224, 196, 0.7);
    transition: 0.3s;
}
.link_wrapper{
    width: 100%;
    display: flex;
    justify-content: center;
}
.band{
    background: rgba(195, 195, 195, 0.5);
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
.btn{
    height: 9px;
    width: 9px;
    margin-bottom: auto;
    margin-top: auto;
    margin: 1.5%;
    border-radius: 100px;
}

#contact{
    display: none;
    font-size: 1em;
    padding: auto;
    padding-top: 9em;
    padding-bottom: 2%;
    color: #ffffff;
}
#contact p{
    margin: 0;
}

@media only screen and (max-width: 1300px) {
    #projects-wrapper{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }
}

@media only screen and (max-width: 850px) {
    #projects-wrapper{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
    .item{
        width: 350px;
        height: 300px;
    }
    #main-title{
        font-size: 1.5em;
    }

    .stack-image{
        height: 35px; 
    }
    #techstack-wrapper{
        margin-bottom: 4%;
    }

    #contact{
        display: block;
        padding-top: 5em;
        padding-bottom: 4%;
        font-size: 1.5em;
    }
}
</style>