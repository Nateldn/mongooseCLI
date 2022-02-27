const mongoose = require("mongoose");
const { required } = require("yargs");

const movieSchema = new mongoose.Schema({  
    // naming convention for the variable is entirely up to the dev
// Schema() will take a variety of data types
// here we define the type of data accepted
    title: {
        type: String,
        required: true,
        unique: true,
    },
    actor: {
        type: String,
        default: 'not specified',
        unique: false
    },
    rating: {
        type: Number,
        default: 'not specified',
        required: false,
        unique: false,
    },
    director: {
        type: String,
        default: 'not stated',
        required: false,
        unique: false,
    }
});  

const Movie = mongoose.model("Movie", movieSchema); // pass in a non-pluralised version of what you're storing


module.exports = Movie;
