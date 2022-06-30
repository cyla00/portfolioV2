<script lang="ts">
export default{
    data() {
        return{
            email: 'ikhayam000@protonmail.com'
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
        <div id="navigation"> 
            <button id="btn1" class="about-button" @click="btn1()"></button>
            <button id="btn2" class="about-button" @click="btn2()"></button>
        </div>
        <div id="title">
            <h1>Hello! my name is Ismail<br><span class="custom-title">full-stack web developer</span></h1>
            <p>Here some of the technologies i use.</p>
            <img src="@/assets/primary.png" alt="">
        </div>

        <div id="form-wrapper">

            <h1 id="form-title">let's get in <span class="custom-title">touch</span></h1>
            
            <div class="form-fields">
                <input type="text" name="first-name" id="" placeholder="first name">
                <input type="text" name="last-name" id="" placeholder="last name">
            </div>


            <div class="form-fields">
                <input type="text" name="email" id="" placeholder="email">
                <input type="text" name="number" id="" placeholder="number">
            </div>

            <div class="form-fields">
                <input type="text" name="message" id="msg" placeholder="message">
            </div>

            <div id="contact-btn">
                <button>submit</button>
            </div>
            

            <div id="email-me">
                <p>email me <br>{{email}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
#about-wrapper{
    display: grid;
    grid-template-columns: 5% 1fr;
    font-family: Archivo;
    background: #212121;
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
    font-size: 1em;
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
img{
    width: 30vw;
    height: auto;
    margin: auto;
}

#form-wrapper{
    display: none;
    margin: auto;
    width: 70%;
}
#form-wrapper h1{
    margin-bottom: 3em;
}

#form-title{
    color: #0D7377;
}

input{
    color: #eeeeee;
    background: none;
    border: none;
    border-bottom: solid #eeeeee 3px;
    margin: 2%;
    margin-bottom: 2em !important;
    width: 100%;
}

.form-fields{
    display: flex;
    width: 100%;
}

#msg{
    width: 100%;
    margin-top: 3em;
}

#contact-btn{
    text-align: left;
    margin: 2%;
}
#contact-btn button{
    background: #eeeeee;
    font-family: 'Open Sans';
    border: none;
}
#contact-btn button:active{
    background: #ffffff;
}

#email-me{
    text-align: left;
    font-size: 0.9em;
    margin: 2%;
    margin-top: 4em;
    color: #ffffff;
}

#email-me p{
    color: #ffffff;
}
</style>