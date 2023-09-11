const express = require("express")
const fs = require("fs")
const PORT = process.env.PORT || 5000

const app = express()
const router = require("./router/index")

app.use(express.json())
app.use("/api", router)
app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    fs.readFile("index.html", (err, data) => res.end(data))
})
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))