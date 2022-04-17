const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema(
    {
       
        type: { type: String, required: true },
        block: { type: String, required: true },
        number: {type: Number,required: true },
        residents: {type: Number,required: true }
    },
    {
        versionKey: false,
        timeStamps:true
    }
)

const flatData = mongoose.model("flat", flatSchema);

module.exports = flatData;