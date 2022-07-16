<script lang="ts">

</script>

<template>
    <div id="about-wrapper">
        <h1 id="title">What I Mostly Work On</h1>

        <div class="dev-wrapper">
            <div class="text-wrapper">
                <h1>E-commerce &amp; Landing Websites</h1>
                <p>Helping businesses to launch an online E-commerce<br>platform that checks all their needs.<br>
                The technology used are CMS like <span class="special">Wordpress</span> &amp; <span class="special">Prestashop</span>.</p>
            </div>
            <div class="image-wrapper">
                <img src="https://i.ibb.co/88jw2bC/ecommerce.png" alt="">
            </div>
        </div>

        <div class="dev-wrapper">
            <div class="image-wrapper">
                <img src="https://i.ibb.co/xjrbGCb/clo.png" alt="">
            </div>
            <div class="text-wrapper">
                <h1>Web &amp; Mobile Apps</h1>
                <p>Building web applications <span class="special">API</span>'s featuring:<br>
                - secure <span class="special">Database</span> connection,<br>
                - <span class="special">Authentification</span> &amp; <span class="special">Authorization</span> measures.<br><br>
                And a Front-End made with frameworks like:<br><span class="special">VueJs</span>, <span class="special">Svelte</span> or <span class="special">React-Native</span>.
                </p>
            </div>
        </div>

        <div class="dev-wrapper">
            <div class="text-wrapper">
                <h1>Systems &amp; Networks Admin</h1>
                <p>Managing <span class="special">Hosts</span> &amp; <span class="special">Domains</span> using cloud technology.<br>
                Offering you the simplest experience to deploy your projects. 
                </p>

            </div>
            <div class="image-wrapper">
                <img src="https://i.ibb.co/NFWwcd1/domain-servers.png" alt="">
            </div>
        </div> 

    </div>
</template>

<style scoped>
#about-wrapper{
    background: #212121;
    font-family: Archivo;
}
#title{
    color: #0D7377;
    font-size: 3em;
    padding-bottom: 10%;
    text-align: center;
}
.dev-wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 10%;
}
.dev-wrapper img{
    width: 60%;
}
.text-wrapper{
    text-align: start;
    padding-left: 20%;
    padding-right: 20%;
    position: relative;
    top: 40%;
}
.text-wrapper h1{
    color: #32E0C4;
    font-size: 2.3em;
}
.text-wrapper p{
    color: #c3c3c3;
    font-size: 1.3em;
}

.special{
    color: #ff3377;
}

</style>
