<script lang="ts">
export default{
    name: 'AboutSection',
    data() {
        return{
            email: 'paperdev@agencepapercode.com'
        }
    },
    methods: {
        btn1: () => {
            var btn1 = document.getElementById('btn1')
            var form = document.getElementById('form-wrapper')
            var title = document.getElementById('title')
            
            form!.style.display = "none"
            title!.style.display = "block"
        },
        btn2: () => {
            var btn2 = document.getElementById('btn2')
            var form = document.getElementById('form-wrapper')
            var title = document.getElementById('title')

            form!.style.display = "block"
            title!.style.display = "none"
        }
    }
}
</script>

<template>
    
    <div id="about-wrapper">

        <div id="title">
            <h1>Hello! my name is Ismail<br><span class="custom-title">full-stack web developer</span></h1>
            <p>Here some of the technologies i use</p>
            <div id="tech-stack">
                <div class="img-wrapper">
                    <img src="https://i.ibb.co/BK1T9FM/dj.png" alt="">
                </div>
                
                <div class="img-wrapper">
                    <img src="https://i.ibb.co/2h7P91H/js.png" alt="">
                </div>

                <div class="img-wrapper">
                    <img src="https://i.ibb.co/5YShrqL/mongo.png" alt="">
                </div>

                <div class="img-wrapper">
                    <img src="https://i.ibb.co/M1ZkK0h/ps.png" alt="">
                </div>
            
                <div class="img-wrapper">
                    <img src="https://i.ibb.co/vcfC91m/py.png" alt="">
                </div>
                
                <div class="img-wrapper">
                    <img src="https://i.ibb.co/gVbjkHD/svelte.png" alt="">
                </div>
            
                <div class="img-wrapper">
                    <img src="https://i.ibb.co/d4NGP5N/ts.pngg" alt="">
                </div>
            
                <div class="img-wrapper">
                    <img src="https://i.ibb.co/dcF9ZHN/vue.png" alt="">
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
#about-wrapper{
    display: flex;
    font-family: Archivo;
    background: #212121;
    min-height: 100vh;
    margin: auto;
}
#navigation{
    margin: auto;
}

.about-button{
    width: 15px;
    height: 15px;
    border-radius: 100px;
    cursor: pointer;
    background: #32E0C4;
    border: none;
    display: block;
    margin: auto;
    margin-bottom: 2em;
}
.about-button:hover{
    background: #212121;
    border: solid #32E0C4 2px;
    transition: 0.2s;
}
#title{
    font-size: 1.5em;
    color: #0D7377;
    margin: auto;
}

.custom-title{
    color: #32E0C4;
    text-transform: uppercase;
}
p{
    font-family: 'Open Sans';
    color: #c3c3c3;
}

#tech-stack{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}
.img-wrapper{
    background-color: rgba(195, 195, 195, 0.5);
    width: 100px;
    height: 100px;
    width: 100px;
    height: 100px;
    margin: 1em;
    margin-top: 1em;
    padding: 1em;
    border-radius: 5px;
    text-align: center;
}
img{
    height: 100px;
    width: 100px;
}

@media only screen and (max-width: 850px) {
    #tech-stack{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        margin-bottom: 10em;
    }

    .img-wrapper{
        margin: auto;
        margin-top: 1em;
    }

    #about-wrapper{
        display: grid;
        grid-template-columns: 100%;
        font-family: Archivo;
    }
    #title{
        font-size: 1em;
    }
}
</style>