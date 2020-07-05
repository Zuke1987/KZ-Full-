// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({encoded: true}));








app.listen(3000, function() {
  console.log("BMI server started on port 3000");
}
