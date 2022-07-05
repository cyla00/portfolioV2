<script lang="ts">
export default{
    methods: {
        logout(){
            localStorage.removeItem('id')
            return window.location.href = '/'
        }
    }
}
</script>


<template>
    <div>
        <h1>admin</h1>
        <button @click="logout()">logout</button>
    </div>
    
</template>

<style>

</style>