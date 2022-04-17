const express = require("express");
const flatData = require("../model/flats.model");

const router = express.Router();

router.post("", async (req, res)=>{
    try {
        const userData = await flatData.create({
            type: req.body.type,
            block: req.body.block,
            number: req.body.number,
            residents:req.body.residents
            
        });
    return res.send(userData)
    } catch (err) {
       return res.send(err.message)
    }
})

router.get("", async (req, res)=>{
    try {
        const userData = await flatData.find().lean().exec();
    return res.send(userData)
    } catch (err) {
       return res.send(err.message)
    }
})
module.exports = router