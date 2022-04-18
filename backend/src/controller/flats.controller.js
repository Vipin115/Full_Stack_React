const express = require("express");
const flatData = require("../model/flats.model");

const router = express.Router();

router.post("", async (req, res)=>{
    try {
        const userData = await flatData.create({
            type: req.body.type,
            block: req.body.block,
            number: req.body.number,
            residents:req.body.residents,
            image:req.body.image
            
        });
    return res.send(userData)
    } catch (err) {
       return res.send(err.message)
    }
})

router.get("", async (req, res)=>{

    const page = req.query.page || 1;
    const size = req.query.size || 3;
    try {
        const userData = await flatData.find(query).skip((page-1)*size).limit(size).lean().exec();

        const totalPages = Math.ceil(
            (await User.find(query).countDocuments()) / size
          );
    return res.send(userData,totalPages)
    } catch (err) {
       return res.send(err.message)
    }
})
module.exports = router