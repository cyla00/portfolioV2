// start developing here

require('dotenv').config()
const express = require('express')
const os = require('os')
const app = express()
const { Client } = require('pg')
const client = new Client()
const { v4: uuidv4 } = require('uuid')
const { createHash } = require('crypto')

// sha256 hash generator
function hash(string :string) {
    return createHash('sha256').update(string).digest('hex')
}

// database connector and builder
async function db_build() :Promise<void>{
    try{
        await client.connect()
        await client.query(`CREATE TABLE IF NOT EXISTS admin (
            id VARCHAR(200) UNIQUE NOT NULL PRIMARY KEY,
            email VARCHAR(100) UNIQUE NOT NULL ,
            password VARCHAR(200) UNIQUE NOT NULL,
            created_on TIMESTAMP NOT NULL,
            last_login TIMESTAMP
        );`, async (err :any, res :object) :Promise<void> => {
            if(err){
                console.log(err.stack)
                await client.end()
                return
            }
        })

        const admin_query = `INSERT INTO admin(id, email, password, created_on) VALUES ($1, $2, $3, current_timestamp) ON CONFLICT (email) DO NOTHING;`
        const values = [uuidv4(), hash(String(process.env.DEV_EMAIL)), hash(String(process.env.DEV_PW))]
        await client.query(admin_query, values, async (err :any, res :object) :Promise<void> => {
            if(err){
                console.log(err.stack)
                await client.end()
                return
            }
        })

        await client.query(`CREATE TABLE IF NOT EXISTS projects (
            id VARCHAR(200) UNIQUE NOT NULL PRIMARY KEY,
            title VARCHAR(100) NOT NULL,
            image VARCHAR(20000) NOT NULL,
            project_url VARCHAR(200),
            tech_stack VARCHAR[],
            created_on TIMESTAMP NOT NULL
        );`, async (err :any, res :object) :Promise<void> => {
            if(err){
                console.log(err.stack)
                await client.end()
                return
            }
            console.log('database connected and populated')
            await client.end()
        })
    }
    catch(err){
        console.log(err)
        await client.end()
    }
}
db_build()


// api starting point
app.use(express.json())

app.post('/api/login', async (req:any, res:any) :Promise<void> => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [admin_email, admin_password] :string[] = Buffer.from(b64auth, 'base64').toString().split(':')
    
    const query :string = `SELECT * FROM admin WHERE email=$1 AND password=$2;`
    const values :string[] = [hash(admin_email), hash(admin_password)]
    
    try{
        await client.query(query, values, async (err :any, res :any) :Promise<void> => {
            console.log(res)
            await client.end()
        })
    }
    catch(err){
        console.log(err)
        await client.end()
    }
    res.sendStatus(200)
})

app.post('/api/projects', (req:any, res:any) :void => {

    res.sendStatus(200)
})

app.post('/api/addProject', (req:any, res:any) :void => {
    
    res.sendStatus(200)
})

app.post('/api/removeProject', (req:any, res:any) :void => {
    
    res.sendStatus(200)
})

if(process.env.PR_STATUS === 'production'){
    app.use(express.static(__dirname + '/public'))
}

app.listen(process.env.PORT, () => {
    console.log(`http://${os.hostname()}:${process.env.PORT}`)
})

