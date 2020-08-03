"use strict";
// let limecola = document.querySelector(".limecola");
// let chocolate = document.querySelector(".chocolate");
// let gummies = document.querySelector(".gummies");
// let peanuts = document.querySelector(".peanuts");

//#1 SNACK COUNTER
let totalSnacks = document.querySelectorAll(".button");

let total = 0;
let buttonContainer = document.querySelector(".container");

buttonContainer.addEventListener("click", (event) => {
  let amount = parseInt(event.target.getAttribute("data-amount"));
  console.log(amount);
  total += amount;
  let totalParagraph = document.querySelector(".total");
  totalParagraph.innerText = total;
});

//#2 FORM QUESTION
let coinForm = document.querySelector(".coin-form");
let coinContainer = document.querySelector(".coin-container");

coinForm.addEventListener("money-button", (event) => {
  event.preventDefault();
  let data = new FormData(coinContainer);
  let howmany = data.get("howmany");
  let coin = data.get("coin");
  for (let i = 0; (i = howmany); i++) {
    let newDiv = document.createElement("div");
    newDiv.innerText = coin;
    coinContainer.append(newDiv);
  }
  form.reset();
});
//   let howmanyResult = document.querySelector(".howmany");
//   howmanyResult.innerText = howmany;
//   let coinsResult = document.querySelector(".coins");
//   coinsResult.innerText = coins;
// });

// coinContainer.addEventListener("click", (event) => {
//   let amount = parseInt(event.target.getAttribute("data-value"));
//   coinTotal += amount;
//   let totalAmount = document.querySelector(".money");
//   totalAmount.innerText = total;
// });

//#3 LIGHT BULB
let lightBulb = document.querySelector(".light-bulb-div");

let on = document.querySelector(".on-button");
let off = document.querySelector(".off-button");
let toggle = document.querySelector(".toggle-button");
let end = document.querySelector(".end-button");

on.addEventListener("click", lighter);
off.addEventListener("click", darker);
toggle.addEventListener("click", toggle);
end.addEventListener("click", end);

for (on of buttons) {
  let.lightBulb.style.backgroundColor = "light gray";
}

for (off of buttons) {
  let.lightBulb.style.backgroundColor = "black";
}

for (toggle of buttons) {
  let;
}
