const mysql = require("mysql")

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"ExpressTuto"
});
db.getConnection(()=>{
    console.log("connect to db ")
})

module.exports = db;