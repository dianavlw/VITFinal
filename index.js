
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = ".dice" + randomNumber1 + ".png";  // dice1.png - dice6.png

var randomImageSourse = "images/" + randomDiceImage; //images/dice1.png - images/dice.6.png

var image1 = document.querySelectorAll(".img")[0];

image1.setAttribute("src", randomImageSource);

 
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomImageSource2 + ".png";

document.querySelectorAll(".img")[1].setAttribute("src", randomImageSource2);


