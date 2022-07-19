<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name: 'Footer',
    data(){
        return{
            year: '',
        }
    },
    mounted(){
        const d = new Date()
        this.year = d.getFullYear().toString()
    }
})
</script>

<template>
    <footer>
        <div id="content">
            <div id="socials">
                <a href="https://www.github.com/cyla00" target="_blank"><img src="https://i.ibb.co/JvdWZmZ/g.png" alt=""></a>
                <p>paperdev@agencepapercode.com</p>
            </div>
            
        </div>
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

@media only screen and (max-width: 850px) {
    img{
        width: 3em;
        margin: 2%;
    }
}
</style>