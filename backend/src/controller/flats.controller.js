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

    
    try {
        const userData = await flatData.find().lean().exec();

        // const totalPages = Math.ceil(
        //     (await User.find().countDocuments()) / size
        //   );
    return res.send(userData)
    } catch (err) {
       return res.send(err.message)
    }
})

router.get("/:id", async (req, res)=>{

   
    try {
        const userData = await flatData.findById(req.params.id).lean().exec();

        
    return res.send(userData)
    } catch (err) {
       return res.send(err.message)
    }
})

module.exports = router