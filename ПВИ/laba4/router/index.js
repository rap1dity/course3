const dbController = require("../controller/db.controller")
const Router = require("express").Router
const router = new Router()


router.get("/db",  dbController.getUsers)
router.post("/db", dbController.addUser)
router.put("/db", dbController.editUser)
router.delete("/db", dbController.deleteUser)

module.exports = router