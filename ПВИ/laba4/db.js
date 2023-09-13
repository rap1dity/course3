class DB {
    db = [
        {id: "35169acd-db48-4df3-8697-d38d2e8f02dc", name: "Andrew", bday: "2004-05-21"},
        {id: "4e1cb3f5-f0c8-4fbe-96a6-adb519efde7f", name: "Oleg", bday: "2003-12-04"},
        {id: "4937f844-e79e-4312-936a-cc195e7644e3", name: "Kate", bday: "2001-10-15"}
    ]

    async select(){
        return new Promise(res => res(JSON.stringify(this.db)))
    }

    async insert(user) {
        this.db.push(user)
        return new Promise(res => res(JSON.stringify(user)))
    }

    async update(editedUser){
        for(let i = 0; i < this.db.length; i++) {
            if (this.db[i].id === editedUser.id) {
                this.db[i] = editedUser
                return new Promise(res => res(JSON.stringify(editedUser)))
            }
        }
        return new Promise(res => res("User not founded"))
    }

    async delete(userId){
        for(let i = 0; i < this.db.length; i++) {
            if (this.db[i].id === userId) {
                this.db.splice(i, 1)
                return new Promise(res => res(`User ${userId} deleted`))
            }
        }
        return new Promise(res => res("User not founded"))
    }
}

module.exports = new DB()