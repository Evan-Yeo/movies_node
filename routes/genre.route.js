const router = require("express").Router();
const Genre = require("../models/genre.model");

router.get("/new", (req, res) => {
  res.render("people/new");
});

router.post("/new", (req, res) => {

  let genre = new Genre(req.body);

  genre
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  Genre.findById(req.params.id)
    .populate("movies")
    .then((genre) => {
      res.send(genre);
    });
});

module.exports = router;