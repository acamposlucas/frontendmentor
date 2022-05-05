const dice = document.querySelector("#dice");
const quote = document.querySelector("#quote");
const id = document.querySelector("#id");

window.onload = getAdvice();

dice.addEventListener("click", getAdvice);

async function getAdvice() {
  const url = `https://api.adviceslip.com/advice`;

  fetch(url);
  const dados = await fetch(url, { cache: "no-cache" });
  const dadosJSON = await dados.json();

  const advice = dadosJSON.slip;

  id.textContent = advice.id;
  quote.textContent = advice.advice;
}
