const router = require("express").Router();
const Cuisine = require("../models/cuisine.model");

router.get("/new", (req, res) => {
  res.render("cuisines/new");
});

router.post("/new", (req, res) => {
  let cuisine = new Cuisine(req.body);

  cuisine
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
