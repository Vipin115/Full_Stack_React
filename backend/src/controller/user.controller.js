const express = require("express");
const User = require("../model/user.model");

const router = express.Router();



router.post("", async (req, res)=>{
    try {
        const userData = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password:req.body.password
            
        });
    return res.send(userData)
    } catch (err) {
       return res.send(err.message)
    }
})

router.get("", async (req, res)=>{
    try {
        const userData = await User.find().lean().exec();
    return res.send(userData)
    } catch (err) {
       return res.send(err.message)
    }
})



module.exports = router