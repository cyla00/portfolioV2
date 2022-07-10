<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
    data(){
        return{
            tech: [] as string[],
            techUrl: '',
            title: '',
            image: '',
            url: '',
        }
    },
    methods: {
        logout(){
            localStorage.removeItem('id')
            return window.location.href = '/'
        },
        addIndex(){
            if(this.techUrl == '') return alert('please assign a value to tech url')
            this.tech.push(this.techUrl)
            console.log(this.tech)
        },
        removeIndex(i :any){
            this.tech.splice(this.tech.indexOf(i), 1)
            console.log(this.tech)
        },
        async addProject(){

            if(this.title == '' || this.image == '') return alert('please fill the title and image field')
            if(this.url == '') this.url = 'url not available'

            await axios.post(`http://WIN-7OOIKM6PDBD:3000/api/addProject`, 
            {title: this.title, image: this.image, url: this.url, tech: this.tech, idcheck: localStorage.getItem('id')})
            .then((res :any) => {
                if(res.status !== 200) {
                    localStorage.removeItem('id')
                    window.location.reload()
                }
                return window.location.reload()
            })
            .catch((err :any) => {
                localStorage.removeItem('id')
                return window.location.href = '/login'
            })
        }
    },
})
</script>


<template>
    <div>
        <h1>admin</h1>
        <button @click="logout()">logout</button>
        <div id="add_form" ref="add_form">
            <input v-model="title" placeholder="title" type="text">
            <input v-model="image" type="text" placeholder="background link">
            <input v-model="url" placeholder="url" type="text">
            <div v-bind:key="i" v-for="i in tech">
                <p>{{i}}</p>
                <button @click="removeIndex(i)">remove</button>
            </div>
            <input v-model="techUrl" placeholder="tech link" type="text">
            <button @click="addIndex()">add tech</button>
        </div>

        <button @click="addProject()">add project</button>
    </div>
</template>

<style>

</style>