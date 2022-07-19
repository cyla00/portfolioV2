"use strict";
// start developing here
require('dotenv').config();
const express = require('express');
var cors = require('cors');
const os = require('os');
const app = express();
const { v4: uuidv4 } = require('uuid');
const { createHash } = require('crypto');
const { Pool } = require('pg');
const pool = new Pool();
// sha256 hash generator
function hash(string) {
    return createHash('sha256').update(string).digest('hex');
}
// database connector and builder
async function db_build() {
    try {
        await pool.query(`CREATE TABLE IF NOT EXISTS admin (
            id VARCHAR(200) UNIQUE NOT NULL PRIMARY KEY,
            email VARCHAR(100) UNIQUE NOT NULL ,
            password VARCHAR(200) UNIQUE NOT NULL,
            created_on TIMESTAMP NOT NULL,
            last_login TIMESTAMP
        );`, async (err, res) => {
            if (err)
                return console.log(err.stack);
            const admin_query = `INSERT INTO admin(id, email, password, created_on) VALUES ($1, $2, $3, now()) ON CONFLICT (email) DO NOTHING;`;
            const values = [uuidv4(), hash(String(process.env.DEV_EMAIL)), hash(String(process.env.DEV_PW))];
            await pool.query(admin_query, values, async (err, res) => {
                if (err)
                    return console.log(err.stack);
            });
        });
        await pool.query(`CREATE TABLE IF NOT EXISTS projects (
            id VARCHAR(200) UNIQUE NOT NULL PRIMARY KEY,
            title VARCHAR(100) NOT NULL,
            image VARCHAR(20000) NOT NULL,
            project_url VARCHAR(200),
            tech_stack VARCHAR[],
            created_on TIMESTAMP NOT NULL
        );`, async (err, res) => {
            if (err)
                return console.log(err.stack);
            console.log('database connected and populated');
        });
    }
    catch (err) {
        console.log(err);
        pool.end();
    }
}
db_build();
// api starting point
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.set('json spaces', 2);
app.post('/api/login', async (req, res) => {
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [admin_email, admin_password] = Buffer.from(b64auth, 'base64').toString().split(':');
    const query = `SELECT id, last_login FROM admin WHERE email=$1 AND password=$2`;
    const values = [hash(admin_email), hash(admin_password)];
    try {
        await pool.query(query, values, async (err, data) => {
            if (err)
                return res.sendStatus(500);
            if (data.rows[0]) {
                const login_time_query = `UPDATE admin SET last_login=$1 WHERE id=$2`;
                const values = ['now()', data.rows[0].id];
                await pool.query(login_time_query, values);
                var now = new Date().toLocaleString();
                console.log(`admin logged in: ${now}`);
                res.status(200).send({ id: data.rows[0].id });
            }
            else {
                await res.sendStatus(403);
            }
        });
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});
app.post('/api/idcheck', async (req, res) => {
    const query = `select exists(select 1 from admin where id=$1)`;
    const value = [req.body.id];
    try {
        await pool.query(query, value, async (err, data) => {
            if (err)
                return res.sendStatus(500);
            if (!data.rows[0].exists)
                return res.sendStatus(403);
            return res.sendStatus(200);
        });
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
        pool.end();
    }
});
app.get('/api/projects', async (req, res) => {
    const query = `SELECT * FROM projects`;
    let projectList = [];
    await pool.query(query, async (err, data) => {
        if (err)
            res.sendStatus(500);
        data.rows.forEach((element) => {
            projectList.push(element);
        });
        res.status(200).json(projectList);
    });
});
app.post('/api/addProject', async (req, res) => {
    const query = `select exists(select 1 from admin where id=$1)`;
    const value = [req.body.idcheck];
    await pool.query(query, value, async (err, data) => {
        if (err)
            return res.sendStatus(500);
        if (!data.rows[0].exists)
            return res.sendStatus(403);
        const pushQuery = `INSERT INTO projects(
            id, 
            title, 
            image, 
            project_url, 
            tech_stack, 
            created_on
            ) VALUES ($1, $2, $3, $4, $5, now())`;
        const pushValues = [uuidv4(), req.body.title, req.body.image, req.body.url, req.body.tech];
        await pool.query(pushQuery, pushValues, async (err, data) => {
            if (err)
                return res.sendStatus(500);
            return res.sendStatus(200);
        });
    });
});
app.post('/api/removeProject', (req, res) => {
    res.sendStatus(200);
});
if (process.env.PR_STATUS === 'production') {
    app.use(express.static(__dirname + '../dist'));
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/dist/index.html');
    });
}
app.listen(process.env.PORT, () => {
    console.log(`http://${os.hostname()}:${process.env.PORT}`);
});
