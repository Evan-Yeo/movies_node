const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
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
  restaurants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
