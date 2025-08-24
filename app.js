import express from "express";
import DBConnection from "./src/db/index.db.js";
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
DBConnection()
import path from 'path'
app.use(cors())
app.use(express.json())
app.use(express.static("public"))
app.use('/public', express.static(path.join(process.cwd(), "public")))






app.listen(5000, ()=>{
    console.log('server is running on http://localhost:5000')
})

export default app