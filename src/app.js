// this file is the entry point into the app  - as such store it in the root folder
require("./db/connection"); // will run the connection file in its entirety
const { default: mongoose } = require("mongoose");
const yargs = require("yargs");
const { addMovie, list, updateMovie, deleteMovie, titleToDelete } = require("./movie/functions");

// process.env.PRODUCTION && connection(process.env.MONGO_URI)

const app  = async (yargsObj) => {
    try {
        if (yargsObj.add){
            console.log(await addMovie(yargsObj.title, yargsObj.actor, yargsObj.rating, yargsObj.director));
            // this  will add movies to the database
        } else if (yargsObj.addShow) {
            // console.log(await addShow(yargsObj.showTitle, yargsObj.showGenre, yargsObj.showRating));
        }
        else if (yargsObj.list) {
            // this will allow us to list all objects stored in the directory
            console.log(await list());
        } else if (yargsObj.update) {
            // this allows us to update items in the movie collection 
            console.log(await updateMovie(yargsObj.title, yargsObj.actor, yargsObj.rating, yargsObj.director));
        } else if (yargsObj.delete) {
            // Documents can be deleted using the command --delete --title="A string"
            // console `${deleteMovie} was removed from the database`
            console.log(await deleteMovie(yargsObj.title, yargsObj.actor, yargsObj.rating, yargsObj.director));
        } else if (yargsObj.search){
            // Find
            console.log(await searchForMovie(yargsObj.title, yargsObj.actor, yargsObj.rating, yargsObj.director));
        }
        else {
            console.log('Incorrect Command');
        }
      await mongoose.disconnect();  // stops the database from running once it's finished
    } catch (error) {
        console.log(error)
    }
};

app(yargs.argv); // this how we call the app