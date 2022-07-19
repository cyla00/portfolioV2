<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
    name: 'AddProject',
    data(){
        return{
            tech: [] as string[],
            techUrl: '' as string,
            title: '' as string,
            image: '' as string,
            url: '' as string,
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
        },
        removeIndex(i :any){
            this.tech.splice(this.tech.indexOf(i), 1)
        },
        async addProject(){

            if(this.title == '') return alert('please add a title')
            if(this.url == '') this.url = 'url not available'

            await axios.post(`/api/addProject`, 
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
        <button @click="logout()">logout</button>
        <div id="add_form" ref="add_form">
            <input v-model="title" placeholder="title" type="text">
            <input v-model="image" type="text" placeholder="background link">
            <input v-model="url" placeholder="website url if online" type="text">
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

<style scoped>

</style>