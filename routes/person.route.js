const router = require("express").Router();
const Person = require("../models/person.model");

router.get("/new", (req, res) => {
  res.render("people/new");
});

router.post("/new", (req, res) => {
  //   console.log(req.body);
  //   res.send("sent");

  let person = new Person(req.body);

  person
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  Person.findById(req.params.id)
    .populate("restaurants")
    // .populate({
    //   //deep population
    //   path: "restaurants",
    //   //   populate: {
    //   //     path: "cuisines",
    //   //   },
    // })
    .then((person) => {
      res.send(person);
    });
});

module.exports = router;