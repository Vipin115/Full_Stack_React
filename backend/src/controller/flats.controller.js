const express = require("express");
const flatData = require("../model/flats.model");

const router = express.Router();


router.get("", async (req, res)=>{
    try {
        const userData = await flatData.find().lean().exec();
    return res.send(userData)
    } catch (err) {
       return res.send(err.message)
    }
})
module.exports = router