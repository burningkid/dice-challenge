var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceName1 = "/images/dice0" + randomNumber1 + ".png"
document.querySelector(".img1").src = diceName1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceName2 = "/images/dice0" + randomNumber2 + ".png"
document.querySelector(".img2").src = diceName2;

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!"
    
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!"
} else {
    document.querySelector("h1").innerHTML = "Draw"
}