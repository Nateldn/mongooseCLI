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





// //====== Add TV Show Schema ==== 
// const tvShowSchema = new mongoose.Schema({

//     showTitle: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     showGenre: {
//         type: String,
//         required: false,
//         enum: {
//           value: ['Sci-fi', 'Comedy', 'Documentary', 'Current Affairs', 'Drama'],
//           message: '{VALUE} is not supported. Enter one of the following: Sci-fi, Comedy, Documentary, Current Affairs or Drama'}
//     },
//     showRating: {
//         type: Number,
//         default: 'not specified',
//         required: false,
//         unique: false,
//     },
// });


// const tvShow = mongoose.model("TV-Show", tvShowSchema); // pass in a non-pluralised version of what you're storing


// // module.exports = {tvShow, Movie};
module.exports = Movie;


