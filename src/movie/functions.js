const Movie = require("./model");

exports.addMovie = async (titleStr, actorStr, ratingNum, directorStr)  => { // shorthand export keyword // this fuction will allow us to pass in our data  
    try {
        await Movie.create({title: titleStr, actor: actorStr, rating: ratingNum, director: directorStr }); // create is a mongoose method that create a document in the mongoDB database - this 
        return "Movie successfully added!";
    } catch (error) {
        console.log(error)
    }
}

// Here we update documents using findOneAndUpdate
// Let's filter documents by title which are unique - set within the model.js file.
exports.updateMovie = async (titlefilter, newActor, newRating, newDirector)  => { 
    try {
        await Movie.findOneAndUpdate(// findOneAndUpdate is a mongoose method that allows you to update multiple keys in a MongoDB document. 

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


exports.deleteMovie = async (titleToDelete)  => {
 try {
     // findOneAndUpdate is a mongoose method that allows you to update multiple keys in a MongoDB document. 
    await Movie.deleteOne({ title: titleToDelete });
    console.log(`${titleToDelete} was successfully deleted`);
    } 
    catch (error) {
    console.log(error)    
    }
};

