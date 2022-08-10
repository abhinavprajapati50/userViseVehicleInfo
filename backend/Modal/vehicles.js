const mongoose = require("mongoose");

const vehicles = new mongoose.Schema({
    vehicleName: {
        type: String,
        required: [true, "The vehicle name is required"]
    },
    vehicleBrand: {
        type: String,
        required: [true, "The vehicle brand is required"]
    },
    vehicleNumber: {
        type: Number,
        required: [true, "The vehicle number is required"]
    },

},
    {
        timestamps: true,
    }
);
const vehicleSchema = new mongoose.model("vehicle", vehicles);
module.exports = vehicleSchema;