const router = require("express").Router();
const UserController = require("../controllers/UserController")
router.get("/",(req,res,next)=>{
    res.send("hello world");
});
router.get("/user", UserController.getallUser);


module.exports=router;