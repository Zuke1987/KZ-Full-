//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello, world!</h1>");
})

app.get("/contact", function(req, res){
  res.send("Contact me at: kzuhoski87@gmail.com");
});

app.get("/about", function(req, res){
    res.send("<p>My name is Kevin Zuhoski and I am a " +
     "self-taught full stack developer.  I am also " +
    "a professional Japanese to English translator. As a developer, " +
    "I have created several websites and apps using technologies such as " +
    "java, JavaScript, HTML, CSS, Bootstrap, as well as many others</p>");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Playing Guitar</li><li>Rowing</li><li>Studying Japanese</li></ul>")
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
