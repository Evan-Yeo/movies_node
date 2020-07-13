const router = require("express").Router();
const Movie = require("../models/movie.model");
const Person = require("../models/person.model");
const Cuisine = require("../models/cuisine.model");

router.get("/", (req, res) => {

  Movie.find()

    .populate("directedBy")
    .populate("cuisine")
    .then((movies) => {
      //   res.send(restaurants);
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

  //save restaurant first
  movie
    .save()
    .then(() => {
      //restaurant : { _id: , ownedBy: , name : ,}
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
    let cuisines = await Cuisine.find();

    res.render("movies/new", {
      people,
      cuisines
    });
  } catch (error) {
    console.log(error);
  }

  //   Person.find() //[]
  //     .then((people) => {
  //       //person = {} people = []
  //       //   console.log(people);
  //       //to find all cuisines
  //       // Cuisine.find() //[]
  //       //   .then((cuisines) => {
  //       //       console.log(people);
  //       res.render("restaurants/new", { people, cuisines });
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

  //   Restaurant.findById(req.params.id).then((restaurant) => {
  //     Person.findById(restaurant.ownedBy).then((person) => {
  //       res.send(restaurant, person);
  //     });
  //   });
});

module.exports = router;