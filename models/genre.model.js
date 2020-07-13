const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const genreSchema = Schema({
  name: String,
}, {
  timestamps: true,
});
/* 
createdAt:
updatedAt:
*/
const Genre = mongoose.model("Genre", genreSchema);
module.exports = Genre;