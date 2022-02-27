require("dotenv").config();
const mongoose = require ("mongoose");
const { config } = require("yargs");

const connection = async () => {
    try { // setup error handling
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successful connected");
    } catch (error) {
        console.log(error);
    }
}

connection();
