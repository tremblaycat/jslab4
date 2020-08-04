"use strict";
// let limecola = document.querySelector(".limecola");
// let chocolate = document.querySelector(".chocolate");
// let gummies = document.querySelector(".gummies");
// let peanuts = document.querySelector(".peanuts");

//#1 SNACK COUNTER
// let totalSnacks = document.querySelectorAll(".button");

// let total = 0;
// let buttonContainer = document.querySelector(".container");

// buttonContainer.addEventListener("click", (event) => {
//   let amount = parseInt(event.target.getAttribute("data-amount"));
//   console.log(amount);
//   total += amount;
//   let totalParagraph = document.querySelector(".total");
//   totalParagraph.innerText = total;
// });

let totalParagraph = document.querySelector(".total");

let buttons = document.querySelectorAll(".button");
//keep track of the total
let totalDue = 0;
//adding event listener for each button
buttons.forEach((snack) => {
  snack.addEventListener("click", () => {
    let amount = Number(snack.getAttribute("data-amount"));
    totalDue += amount;
    totalParagraph.innerText = `Total:$${totalDue}`;
  });
});

//#2 FORM QUESTION
let coinForm = document.querySelector(".coin-form");
let coinContainer = document.querySelector(".coin-container");

coinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  //data holds a snapshot of the input. We are bringing the info out thru number and type.
  let data = new FormData(coinForm);
  let number = data.get("amount");
  let type = data.get("type");
  for (let i = 0; i < number; i++) {
    let newCoin = document.createElement("div");
    //line below gives classes to the new divs so you can add cosmetic changes in CSS
    newCoin.classList.add(type);
    newCoin.innerText = type;
    coinContainer.append(newCoin);
    //line below removes coins if they're clicked on
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
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
// let lightBulb = document.querySelector(".light-bulb-div");

// let on = document.querySelector(".on-button");
// let off = document.querySelector(".off-button");
// let toggle = document.querySelector(".toggle-button");
// let end = document.querySelector(".end-button");

// on.addEventListener("click", lighter);
// off.addEventListener("click", darker);
// toggle.addEventListener("click", toggle);
// end.addEventListener("click", end);

// for (on of buttons) {
//   let.lightBulb.style.backgroundColor = "light gray";
// }

// for (off of buttons) {
//   let.lightBulb.style.backgroundColor = "black";
// }

// for (toggle of buttons) {
//   let;
// }

let bulb = document.querySelector(".light-bulb-div");
let onButton = document.querySelector(".on");
let offButton = document.querySelector(".off");
let toggleButton = document.querySelector(".toggle");
let endButton = document.querySelector(".end");

onButton.addEventListener("click", () => {
  bulb.classList.add("light");
});

offButton.addEventListener("click", () => {
  bulb.classList.remove("light");
});

toggleButton.addEventListener("click", () => {
  bulb.classList.toggle("light");
});

endButton.addEventListener("click", () => {
  bulb.remove();
  let buttons = document.querySelectorAll(".switch");
  buttons.forEach((button) => {
    button.diabled = true;
  });
});
