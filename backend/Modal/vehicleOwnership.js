// const mongoose = require("mongoose");
const { Schema, default: mongoose } = require("mongoose");


const vehicle_Ownership = new mongoose.Schema({
    vehicleId: {
        type: String,
        required: [true, "The vehicleId is required"],
    },
    userId: {
        type: String,
        required: [true, "The userId is required"],
    },
},
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("vehicle_Ownership", vehicle_Ownership);