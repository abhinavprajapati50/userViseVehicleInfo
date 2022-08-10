

const userSchema = require('../Modal/user');
const vehicleOwnership = require('../Modal/vehicleOwnership');
const vehicleSchema = require('../Modal/vehicles');



exports.createUser = async (req, res) => {
    try {

        const { name,
            surname,
            email,
            phone,
            location
        } = req.body
        const user = await userSchema.create({
            name,
            surname,
            email,
            phone,
            location
        })
        return res.status(200).json({ status: true, mesage: "Successfully added User", data: user })
    } catch (error) {
        console.log(error || error.message);
        return error;
    }
}
exports.allUser = async (req, res) => {
    try {
        const user = await userSchema.find({})

        return res.status(200).json({ status: true, mesage: "All User Render successfully ", data: user })
    } catch (error) {
        console.log(error || error.message);
        return error;
    }
}


exports.createVehicle = async (req, res) => {
    try {

        const { vehicleName,
            vehicleBrand,
            vehicleNumber,
        } = req.body
        const user = await vehicleSchema.create({
            vehicleName,
            vehicleBrand,
            vehicleNumber
        })
        return res.status(200).json({ status: true, mesage: "Successfully added vehicle", data: user })
    } catch (error) {
        console.log(error || error.message);
        return error;
    }
}
exports.allVehicle = async (req, res) => {
    try {
        const user = await vehicleSchema.find({})
        return res.status(200).json({ status: true, mesage: "All vehicles Successfully ", data: user })
    } catch (error) {
        console.log(error || error.message);
        return error;
    }
}


exports.joinController = async (req, res) => {
    const joinUserVehicle = await vehicleOwnership.findAll({ where: { id: req.params.id } });
    vehicleOwnership.aggregate([{
        $lookup: {
            from: 'userId',
            localField: '_id',
            foreignField: 'userId',
            as: 'user_vise_vehicle'
        }
    }]);

    console.log(joinUserVehicle);

}