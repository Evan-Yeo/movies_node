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
  email: {
    type: String,
    unique: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  movies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
  }, ],
});

const Person = mongoose.model("Person", personSchema);
module.exports = Person;