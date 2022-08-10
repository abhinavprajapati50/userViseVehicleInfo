const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "The name is required"],
    },
    surname: {
        type: String,
        required: [true, "The surname is required "],
    },
    email: {
        type: String,
        required: [true, "The email is required"],
    },
    phone: { type: Number, required: [true, "The phone number is required"], },
    location: {
        type: String,
        // required: true,
    },


},
    {
        timestamps: true,
    }
);
module.exports = new mongoose.model("user", userSchema);