const router = require("express").Router();
const Movie = require("../models/movie.model");
const Person = require("../models/person.model");
const Genre = require("../models/genre.model");

router.get("/", (req, res) => {

  Movie.find()

    .populate("directedBy")
    .populate("genre")
    .then((movies) => {
      //   res.send(movies);
      res.render("movies/index", {
        movies
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/new", (req, res) => {
  //   console.log(req.body);
  let movie = new Movie(req.body);
  console.log(movie);

  //save movie first
  movie
    .save()
    .then(() => {
      //movie : { _id: , ownedBy: , name : ,}
      //if saved then save person
      Person.findById(movie.directedBy).then((person) => {
        //push into movies array in person model
        person.movies.push(movie._id);

        person.save().then(() => {
          //if sucess redirect to home page
          res.redirect("/");
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
// asynchronous function
router.get("/new", async (req, res) => {
  try {
    let people = await Person.find();
    let genres = await Genre.find();

    res.render("movies/new", {
      people,
      genres
    });
  } catch (error) {
    console.log(error);
  }

  //   Person.find() //[]
  //     .then((people) => {
  //       //person = {} people = []
  //       //   console.log(people);
  //       //to find all genres
  //       // Genre.find() //[]
  //       //   .then((genres) => {
  //       //       console.log(people);
  //       res.render("movies/new", { people, genres });
  //       //   })
  //       //   .catch((err) => {
  //       //     console.log(err);
  //       //   });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
});
//.../12345

router.get("/show/:id", (req, res) => {
  movie.findById(req.params.id)
    .populate("ownedBy")
    .then((movie) => {
      res.send(movie);
    });

  //   Movie.findById(req.params.id).then((movie) => {
  //     Person.findById(movie.ownedBy).then((person) => {
  //       res.send(movie, person);
  //     });
  //   });
});

module.exports = router;