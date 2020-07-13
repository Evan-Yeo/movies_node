const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  cuisine: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cuisine",
  }, ],
  directedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Person",
  },
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;