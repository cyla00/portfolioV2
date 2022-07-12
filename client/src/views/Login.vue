<script lang="ts">
import axios from 'axios'

export default{
    data(){
        return{
            email: '',
            password: '',
        }
    },
    methods: {
        async checkLoginData(email :string, password :string){
            if(email === '' || password == '') return window.location.reload()
            await axios.post(`http://localhost:3000/api/login`, {}, {
                auth: {
                    username: email,
                    password: password,
                }
            })
            .then(async (res :any) => {
                if(res.status !== 200) return window.location.reload()
                await axios.post(`http://localhost:3000/api/idcheck`, {id: res.data.id}).then((inner_res :any) => {
                    if(inner_res.status !== 200) return window.location.href = '/login'
                    localStorage.setItem('id', res.data.id)
                    return window.location.href = '/admin'
                })
                .catch((err :any) => {
                    window.location.reload()
                })
            })
            .catch((err :any) => {
                window.location.reload()
            })
        }
    },
}
</script>


<template>
    <div id="login-page">
        <h1>login</h1>
        <input v-model="email" placeholder="email" type="text">
        <input v-model="password" placeholder="password" type="password">
        <button @click="checkLoginData(email, password)">login</button>
    </div>
</template>

<style>
#login-page{
    min-height: 100vh;
}
h1{
    margin: 0;
}
</style>