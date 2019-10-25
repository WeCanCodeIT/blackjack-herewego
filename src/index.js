const {
  default: { singleDeckGame }
} = require("blackjack-dealer-logic");
const Dom = require("./utils/Dom");

singleDeckGame.deal();

const dealerHand = singleDeckGame.getDealerHand();
const userHand = singleDeckGame.getUserHand();

Dom.renderCards(dealerHand.getCards(), document.querySelector(".dealer"));
Dom.renderCards(userHand.getCards(), document.querySelector(".user"));


const hitButton = document.querySelector(".hit");

hitButton.addEventListener("click", () =>{
  singleDeckGame.hitUser();
  document.querySelector(".user").innerHTML = "";
  Dom.renderCards(singleDeckGame.getUserHand().getCards(), 
  document.querySelector(".user"));
});

var promptButton = document.getElementById('prompt');
promptButton.onclick = function() {
    var userResponse = prompt('How many chips do you want?');
    var displayContainer = document.getElementById('promptResponse');
    displayContainer.innerText = userResponse;
}

const doubleButton = document.querySelector(".double");

doubleButton.addEventListener("click", () =>{
  if (event.target.classList.contains(".result")) {
    console.log(".result" * 2 )
  }
});