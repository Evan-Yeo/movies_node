const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const app = express();
require("dotenv").config();

/* 
===================
Connect to MongoDB 
*/
mongoose.connect(
  process.env.MONGODBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("MongoDB connected!");
  }
);

app.use(express.urlencoded({
  extended: true
})); //collects form data
app.set("view engine", "ejs"); //view engine setup
app.use(expressLayouts);

app.use("/", require("./routes/movie.route"));
app.use("/user", require("./routes/user.route"));
app.use("/cuisine", require("./routes/cuisine.route"));

app.listen(process.env.PORT, () => {
  console.log(`running on PORT ${process.env.PORT}`);
});