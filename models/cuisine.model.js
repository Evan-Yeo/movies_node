const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cuisineSchema = Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);
/* 
createdAt:
updatedAt:
*/
const Cuisine = mongoose.model("Cuisine", cuisineSchema);
module.exports = Cuisine;
