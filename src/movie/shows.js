const mongoose = require("mongoose");
const { required, string, array, value, message } = require("yargs");

//====== Add TV Show Schema ==== 
const tvShowSchema = new mongoose.Schema({

    showTitle: {
        type: String,
        required: true,
        unique: true,
    },
    showGenre: {
        type: String,
        required: false,
        enum: {
          value: ['Sci-fi', 'Comedy', 'Documentary', 'Current Affairs', 'Drama'],
          message: '{VALUE} is not supported. Enter one of the following: Sci-fi, Comedy, Documentary, Current Affairs or Drama'}
    },
    showRating: {
        type: Number,
        default: 'not specified',
        required: false,
        unique: false,
    },
});


const tvShow = mongoose.model("TV-Show", tvShowSchema); // pass in a non-pluralised version of what you're storing
module.exports = tvShow;
