// player 1 part
var randomNumber1 = Math.floor(Math.random() * 6) + 1
var player1image = "images/dice" + randomNumber1 + ".png"
document.querySelectorAll("img")[0].setAttribute("src", player1image)

// player 2 part
var randomNumber2 = Math.floor(Math.random() * 6) + 1
var player2image = "images/dice" + randomNumber2 + ".png"
document.querySelectorAll("img")[1].setAttribute("src", player2image)

// result
if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player two wins!!!"
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player one wins!!!"
} else {
  document.querySelector("h1").innerHTML = "Draw!!!"
}
