// start developing here

require('dotenv').config()
const express = require('express')
var cors = require('cors')
const os = require('os')
const app = express()
const { v4: uuidv4 } = require('uuid')
const { createHash } = require('crypto')
const { Pool } = require('pg')
const pool = new Pool()
// sha256 hash generator
function hash(string :string) {
    return createHash('sha256').update(string).digest('hex')
}

// database connector and builder
async function db_build() :Promise<void>{
    try{
        await pool.query(`CREATE TABLE IF NOT EXISTS admin (
            id VARCHAR(200) UNIQUE NOT NULL PRIMARY KEY,
            email VARCHAR(100) UNIQUE NOT NULL ,
            password VARCHAR(200) UNIQUE NOT NULL,
            created_on TIMESTAMP NOT NULL,
            last_login TIMESTAMP
        );`, async (err :any, res :object) :Promise<void> => {
            if(err) return console.log(err.stack)

            const admin_query = `INSERT INTO admin(id, email, password, created_on) VALUES ($1, $2, $3, now()) ON CONFLICT (email) DO NOTHING;`
            const values = [uuidv4(), hash(String(process.env.DEV_EMAIL)), hash(String(process.env.DEV_PW))]
            await pool.query(admin_query, values, async (err :any, res :object) :Promise<void> => {
                if(err) return console.log(err.stack)
            })
        })

        await pool.query(`CREATE TABLE IF NOT EXISTS projects (
            id VARCHAR(200) UNIQUE NOT NULL PRIMARY KEY,
            title VARCHAR(100) NOT NULL,
            image VARCHAR(20000) NOT NULL,
            project_url VARCHAR(200),
            tech_stack VARCHAR[],
            created_on TIMESTAMP NOT NULL
        );`, async (err :any, res :object) :Promise<void> => {
            if(err) return console.log(err.stack)
            console.log('database connected and populated')
        })
    }
    catch(err){
        console.log(err)
        pool.end()
    }
}
db_build()

// api starting point
app.use(express.json())
app.use(cors())

app.post('/api/login', async (req:any, res:any) :Promise<void> => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [admin_email, admin_password] :string[] = Buffer.from(b64auth, 'base64').toString().split(':')
    
    const query :string = `SELECT id, last_login FROM admin WHERE email=$1 AND password=$2`
    
    
    const values :string[] = [hash(admin_email), hash(admin_password)]

    try{
        await pool.query(query, values, async (err :any, data :any) :Promise<any> => {
            if(err) return res.sendStatus(500)
            if(data.rows[0]){
                const login_time_query :string = `UPDATE admin SET last_login=$1 WHERE id=$2`
                const values :string[] = ['now()', data.rows[0].id]
                await pool.query(login_time_query, values)
                var now :string = new Date().toLocaleString()
                console.log(`admin logged in: ${now}`)
                res.status(200).send({id: data.rows[0].id})
            }
            else{
                await res.sendStatus(403)
            }
        })
    }
    catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

app.post('/api/idcheck', async (req :any, res :any) :Promise<void> => {
    const query :string = `select exists(select 1 from admin where id=$1)`
    const value :string[] = [req.body.id]
    
    try{
        await pool.query(query, value, async (err :any, data :any) :Promise<any> => {         
            if(err) return res.sendStatus(500)
            if(!data.rows[0].exists) return res.sendStatus(403)
            return res.sendStatus(200)
        })
    }
    catch(err){
        console.log(err)
        res.sendStatus(500)
        pool.end()
    } 
})

app.post('/api/projects', (req:any, res:any) :void => {

    res.status(200).body()
})

app.post('/api/addProject', async (req:any, res:any) :Promise<void> => {
    const query :string = `select exists(select 1 from admin where id=$1)`
    const value :string[] = [req.body.idcheck]

    await pool.query(query, value, async (err :any, data :any) :Promise<any> => {         
        if(err) return res.sendStatus(500)
        if(!data.rows[0].exists) return res.sendStatus(403)
        console.log(data)
        
        const pushQuery :string = `INSERT INTO projects(
            id, 
            title, 
            image, 
            project_url, 
            tech_stack, 
            created_on
            ) VALUES ($1, $2, $3, $4, $5, now())`
        
        const pushValues :any[] = [uuidv4(), req.body.title, req.body.image, req.body.url, req.body.tech]
        await pool.query(pushQuery, pushValues, async (err :any, data :any) :Promise<any> => {
            if(err) return res.sendStatus(500)
            return res.sendStatus(200)
        })
    })
})

app.post('/api/removeProject', (req:any, res:any) :void => {
    
    res.sendStatus(200)
})

if(process.env.PR_STATUS === 'production'){
    app.use(express.static(__dirname + '/public'))
    app.get(/.*/, (req:any, res:any) => {
        res.sendFile(__dirname + '/public/index.html')
    })
}

app.listen(process.env.PORT, () => {
    console.log(`http://${os.hostname()}:${process.env.PORT}`)
})

