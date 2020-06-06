/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/** Schema creation */
const teacherSchema = new mongoose.Schema({
    document:{
        type: "String",
        required: true,
        unique: true
    },
    name:{
        type: "String",
        required: true
    },
    lastname:{
        type: "String",
        required: true
    },
    email:{
        type: "String",
        required: true,
        unique: true
    },
    phone:{
        type: "String",
        required: true
    },
    office:{
        type: "String",
        required: true
    },
    department:{
        type: "String",
        required: true
    }
});

/** schema exportation */
teacherSchema.plugin(validator);
module.exports = teacherSchema;