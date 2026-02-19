const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    shortId:{
        type: String,
        required: true,
        unique: true
    },
    ori_link:{
        type: String,
        required: true
    },
    visitHistory:[
        {
            type: Date
        }
    ],
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
}, {timestamps: true})

const Link = mongoose.model("Link", linkSchema);

module.exports = Link;