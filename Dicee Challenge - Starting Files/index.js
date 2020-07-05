
// Choose a random number between 1 and 6 for the dice roll
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
/* Create the path to one of the images dice1.png to dice6.png using
using the random number as part of the path name*/
var randomImageSource1 = "images/dice" + randomNumber1 + ".png"
// Select the first image and set its src to the randomImageSource2
document.querySelector(".img1").setAttribute("src", randomImageSource1);
// Repeat everything above for the second dice
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"
document.querySelector(".img2").setAttribute("src", randomImageSource2);
/* Compares the two random dice numbers and displays a message
depending on the winner. */
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
}
