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

hitButton.addEventListener("mousedown", () =>{
  singleDeckGame.hitUser();
  document.querySelector(".user").innerHTML = "";
  Dom.renderCards(singleDeckGame.getUserHand().getCards(), 
  document.querySelector(".user"));
});