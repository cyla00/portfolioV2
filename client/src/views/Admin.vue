<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
    data(){
        return{
            tech: [] as string[],
            techUrl: '',
            title: '',
            url: '',
        }
    },
    methods: {
        logout(){
            localStorage.removeItem('id')
            return window.location.href = '/'
        },
        addIndex(){
            this.tech.push(this.techUrl)
            console.log(this.tech)
        },
        removeIndex(i :any){
            this.tech.splice(this.tech.indexOf(i), 1)
            console.log(this.tech)
        },
        async addProject(){
            await axios.post(`http://WIN-7OOIKM6PDBD:3000/api/addProject`, 
            {title: this.title, url: this.url, techUrl: this.techUrl, tech: this.tech, idcheck: localStorage.getItem('id')})
            .then((res :any) => {
                if(res.status !== 200) {
                    localStorage.removeItem('id')
                    return window.location.reload()
                }
                return window.location.reload()
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
            <input name="background" type="text" placeholder="background link">
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