// jshint esversion:6

let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

let diceImg1 = "dice" + randomNumber1 + ".png";
let diceImg2 = "dice" + randomNumber2 + ".png";


let dicePlayer1 = document.querySelector(".img1").setAttribute("src", "images/" + diceImg1);
let dicePlayer2 = document.querySelector(".img2").setAttribute("src", "images/" + diceImg2);


if (randomNumber1 > randomNumber2) {
    document.querySelector(".player-1 p").textContent = "🥇Player 1";
    document.querySelector(".player-2 p").textContent = "🥈Player 2";
    document.querySelector("h1").textContent = "🎉 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector(".player-2 p").textContent = "🥇Player 2";
    document.querySelector(".player-1 p").textContent = "🥈Player 1";
    document.querySelector("h1").textContent = "🎉 Player 2 Wins!";
} else {
    document.querySelector("h1").textContent = "😥 It's a draw!";
}