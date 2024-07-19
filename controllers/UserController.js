const userModel = require("../models/Users")

class UserController{
    static async getallUser(req,res){
        var result = await userModel.getUsers();
        if(result){
            res.send(result)
        }
    }
}

module.exports = UserController