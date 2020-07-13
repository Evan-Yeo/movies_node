const router = require("express").Router();
const User = require("../models/user.model");

router.get("/new", (req, res) => {
  res.render("users/new");
});

router.post("/new", (req, res) => {
  //   console.log(req.body);
  //   res.send("sent");

  let user = new User(req.body);

  user
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .populate("restaurants")
    // .populate({
    //   //deep population
    //   path: "restaurants",
    //   //   populate: {
    //   //     path: "cuisines",
    //   //   },
    // })
    .then((user) => {
      res.send(user);
    });
});

module.exports = router;
