const bill = document.getElementById("input-bill");
const tipButtons = document.querySelectorAll(".btn-tip");
const customTip = document.getElementById("input-custom");
const inputPeople = document.getElementById("input-people");
const tipAmountValue = document.getElementById("tipAmountValue");
const totalPersonValue = document.getElementById("totalPersonValue");
const reset = document.getElementById("reset");

let billAmount = 0.0;
let tipValue = 0.15;
let numberOfPeople = 1;

function getNumberOfPeople() {
  if (inputPeople.value === "") {
    numberOfPeople = 1;
  } else {
    numberOfPeople = inputPeople.value;
  }
  return numberOfPeople;
}

tipButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target === btn) {
      btn.setAttribute("data-active", true);
      tipValue = Number(btn.value / 100);
      calculateBill();
    }
  });
});

customTip.addEventListener("change", () => {
  tipValue = Number(customTip.value / 100);
  calculateBill();
});

function calculateBill() {
  billAmount = Number(bill.value);
  numberOfPeople = getNumberOfPeople();
  tipAmountValue.innerHTML = `$${(
    (billAmount * tipValue) /
    numberOfPeople
  ).toFixed(2)}`;
  totalPersonValue.innerHTML = `$${(
    (billAmount * tipValue + billAmount) /
    numberOfPeople
  ).toFixed(2)}`;
  console.log(billAmount);
}
