const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  designation: {
    type: String,
    enum: ["director", "actor"],
  },

  movies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
  }, ],
});

const Person = mongoose.model("Person", personSchema);
module.exports = Person;