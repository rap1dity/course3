const DB = require('../db')
const uuid = require("uuid")
class DbController{
    async getUsers(req, res, next){
        await DB.select().then(val => res.end(val))
    }
    async addUser(req, res, next){
        const {name, bday} = req.body;
        const user = {id: uuid.v4(), name, bday}
        await DB.insert(user).then(val => res.end(val))
    }
    async editUser(req, res, next){
        const user = req.body;
        await DB.update(user).then(val => res.end(val))
    }
    async deleteUser(req, res, next){
        const userId = req.query.id
        await DB.delete(userId).then(val => res.end(val))
    }
}

module.exports = new DbController()