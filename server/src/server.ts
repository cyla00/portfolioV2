// start developing here

require('dotenv').config()
const express = require('express')
const os = require('os')
const app = express()

app.use(express.json())

let bodyContent

app.post('/api/login', (req:any, res:any) => {
    bodyContent = req.body
    res.sendStatus(200)
})

app.post('/api/addProject', (req:any, res:any) => {
    bodyContent = req.body
    res.sendStatus(200)
})

app.post('/api/removeProject', (req:any, res:any) => {
    bodyContent = req.body
    res.sendStatus(200)
})

if(process.env.PR_STATUS === 'production'){
    app.use(express.static(__dirname + '/public'))
}

app.listen(process.env.PORT, () => {
    console.log(`http://${os.hostname()}:${process.env.PORT}`);
})

