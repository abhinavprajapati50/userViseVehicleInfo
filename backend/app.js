const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./Router/router');
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config()
const app = express();

mongoose.connect("mongodb://abhi:kCMuGg9dfXJ87pNa@ac-mfyso3d-shard-00-00.skzejum.mongodb.net:27017,ac-mfyso3d-shard-00-01.skzejum.mongodb.net:27017,ac-mfyso3d-shard-00-02.skzejum.mongodb.net:27017/Vehicle_Identity?ssl=true&replicaSet=atlas-f7psw7-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
})
    .then((res) => console.log("Database connected successfully"))
    .catch((err) => console.log("Error", err));

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api/v1', route)


// mongoose.connect('mongodb+srv://abhinav50:admin@123@cluster0.skzejum.mongodb.net/ECommerce?retryWrites=true&w=majority')
const PORT = 5000;
app.listen(process.env.PORT || PORT, () => {
    console.log('listening on port ' + PORT);
}) 