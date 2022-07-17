<script lang="ts">
export default{
    data(){
        return{
            year: ''
        }
    },
    mounted(){
        const d = new Date()
        this.year = d.getFullYear()
    }
}
</script>

<template>
    <footer>
        <Div id="content">
            <div id="socials">
                <a href=""><img src="https://i.ibb.co/TgBHmxJ/i.png" alt=""></a>
                <a href=""><img src="https://i.ibb.co/YLwDqHb/l.png" alt=""></a>
                <a href=""><img src="https://i.ibb.co/CJ46YB2/t.png" alt=""></a>
                <p>paperdev@agencepapercode.com</p>
            </div>
            
        </Div>
        <p>&copy; {{year}} ikportfolio.cyou</p>
    </footer>
</template>

<style scoped>
footer{
    background: #4d4d4d;
    color: #d9d9d9;
    padding-left: 4%;
    padding-right: 4%;
}
p{
    margin: 0%;
    padding: 0.4%;
}
#content{
    text-align: center;
}
img{
    width: 2em;
    margin: 0.5%;
}
</style>