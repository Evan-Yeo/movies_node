const router = require("express").Router();
const Movie = require("../models/movie.model");
const User = require("../models/user.model");
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
      //if saved then save user
      User.findById(movie.directedBy).then((user) => {
        //push into movies array in user model
        user.movies.push(movie._id);

        user.save().then(() => {
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
    let users = await User.find();
    let cuisines = await Cuisine.find();

    res.render("movies/new", {
      users,
      cuisines
    });
  } catch (error) {
    console.log(error);
  }

  //   User.find() //[]
  //     .then((users) => {
  //       //user = {} users = []
  //       //   console.log(users);
  //       //to find all cuisines
  //       // Cuisine.find() //[]
  //       //   .then((cuisines) => {
  //       //       console.log(users);
  //       res.render("restaurants/new", { users, cuisines });
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
  //     User.findById(restaurant.ownedBy).then((user) => {
  //       res.send(restaurant, user);
  //     });
  //   });
});

module.exports = router;