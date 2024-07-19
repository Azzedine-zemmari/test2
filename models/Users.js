const db = require("../config/db")

class UserModel{
    

    static async getUsers()
    {
        return new Promise(resolve =>{
            db.query("select * from users",(err,result)=>{
                if(!err){
                    resolve(result)
                }
            })
        })
    }
    
}
module.exports = UserModel
