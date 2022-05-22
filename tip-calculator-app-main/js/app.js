const totalBill = document.getElementById("input-bill");
const tipButtons = document.querySelectorAll(".btn-tip");
const customTip = document.getElementById("input-custom");
const inputPeople = document.getElementById("input-people");
const tipAmountValue = document.getElementById("tipAmountValue");
const totalPersonValue = document.getElementById("totalPersonValue");
const reset = document.getElementById("reset");

let billAmount = 0.0;
let tipValue = 0.15;
let numberOfPeople = 1;
let totalTip = 0;

function calculateTipPerPerson() {
  let tipAmountPerPerson = (billAmount * tipValue) / numberOfPeople;
  return tipAmountPerPerson.toFixed(2);
}

function calculateTotalPerPerson() {
  let tipAmount = billAmount * tipValue;
  let totalBillPerPerson = (billAmount + tipAmount) / numberOfPeople;
  return totalBillPerPerson;
}

function getOutput() {
  tipAmountValue.innerHTML = `$${calculateTipPerPerson()}`;
  totalPersonValue.innerHTML = `$${calculateTotalPerPerson()}`;
}

totalBill.addEventListener("change", () => {
  billAmount = parseInt(totalBill.value);
  getOutput();
});

customTip.addEventListener("change", () => {
  tipValue = customTip.value;
});

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tipValue = button.value;
  });
});

inputPeople.addEventListener("change", () => {
  numberOfPeople = inputPeople.value;
  if (inputPeople.value === 0) {
    numberOfPeople = 1;
  }
  getOutput();
});

reset.addEventListener("click", () => {
  totalBill.value = "";
  inputPeople.value = "";
  tipAmountValue.innerHTML = "";
  totalPersonValue.innerHTML = "";
});
