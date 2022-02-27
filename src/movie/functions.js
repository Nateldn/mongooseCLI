const Movie = require("./model");

exports.addMovie = async (titleStr, actorStr, ratingNum, directorStr)  => { // shorthand export keyword // this fuction will allow us to pass in our data  
    try {
        await Movie.create({title: titleStr, actor: actorStr, rating: ratingNum, director: directorStr }); // create is a mongoose method that create a document in the mongoDB database - this 
        return "Movie successfully added!";
    } catch (error) {
        console.log(error)
    }
}

exports.updateMovie = async (titlefilter, newActor, newRating, newDirector)  => { // here we update movies
    try {
        await Movie.findOneAndUpdate(// findOneAndUpdate is a mongoose method that allows you to update a document in the mongoDB database. Here, we are updating the actor: key in the Movie collection

            { title: titlefilter }, { $set: { "actor": newActor, "rating": newRating, "director": newDirector}}

            // { title: titleStr }, {$set:{"actor": actorStr},$set:{"rating": ratingNum},$set:{"director": directorStr}})

                // { title: titleS }, 
                // { actor: actorS }, 
                // rating: ratingNum, 
                // director: directorStr
                
      );   
        console.log(Movie.findOneAndUpdate);              
        return "Movie successfully updated!";
    } catch (error) {
        console.log(error)
    };
};                       

// Here we create the list functionality 
exports.list = async () => {
    try {
      return await Movie.find({});
    } catch (error) {
        console.log(error)
    }
}

