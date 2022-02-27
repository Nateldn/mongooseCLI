const db = require("../../mock/db");
const { movies} = require ("../../mock/mockData");
const Movie = require("./model");


beforeAll(async () => await db.connect()); 
beforeEach(async () => await db.clearDatabase()); 
afterAll(async () => await db.closeDatabase()); 


describe("testing model integrity",() => {
it("creating a  model",(){
    const movie = new Movie(movies[0]);
    expect(movie.title).tobe
});
});