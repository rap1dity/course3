require('dotenv').config()
const express = require("express")
const PORT = process.env.PORT | 5000
const fs = require("fs")

const router = require('./routes/index')
const app = express()

app.use(express.json())
app.use('/api', router)


app.get("/html", (req,res) =>{
    fs.readFile("index.html", (err, data) => res.end(data));
})

app.get("/png", (req, res) =>{
    fs.readFile("pic.png", (err, data) => res.end(data));
})

app.get("/xmlhttprequest", (req, res) =>{
    fs.readFile("xmlhttprequest.html", (err, data) => res.end(data))
})

app.get("/fetch", (req, res) =>{
    fs.readFile("fetch.html", (err, data) => res.end(data))
})

app.get("/jquery", (req, res) =>{
    fs.readFile("jquery.html", (err, data) => res.end(data))
})


app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));