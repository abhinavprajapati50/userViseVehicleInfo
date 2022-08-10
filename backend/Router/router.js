const express = require('express');
const { joinController, createUser, createVehicle, allUser, allVehicle } = require('../Controller/userVehicles');

const route = express.Router();
//  -----------User
route.post('/create-user', createUser);
route.get('/all-users', allUser);

//  -----------Vehicle
route.post('/create-vehicle', createVehicle);
route.get('/all-vehicles', allVehicle);

// ---------Join user vise vehicle
route.get('/joinuserProduct/:userid', joinController);

module.exports = route;