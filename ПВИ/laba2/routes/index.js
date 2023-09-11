const Router =require("express").Router;
const router = new Router();


router.get("/name", (req, res) =>{
    res.setHeader("Content-Type", "text/plain; charset=utf-8")
    res.end("Коновалов Андрей Владимирович")
})


module.exports = router;