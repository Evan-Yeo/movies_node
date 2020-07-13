const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cuisineSchema = Schema({
  name: String,
}, {
  timestamps: true,
});
/* 
createdAt:
updatedAt:
*/
const Genre = mongoose.model("Genre", cuisineSchema);
module.exports = Genre;