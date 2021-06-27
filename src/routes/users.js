const { Router } = require("express");
const router = Router();

const userController = require("../controllers/users");

router.post("/", userController.authenticate);

// router.post("/",(req,res)=>{
//     res.send("Hello");
//     console.log(req.body);
// })

module.exports = router;
