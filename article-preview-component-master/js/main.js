const shareButton = document.getElementById("share");

shareButton.addEventListener("click", () => {
  const card = document.querySelector(".card");
  let modal = document.createElement("div");
  modal.classList.add("modal", "animate__animated", "animate__fadeIn");
  modal.innerHTML = `
  <div class="modal-socials">
    <p>Share</p>
    <ul>
      <li data-social="facebook"><a href="#">Facebook</a></li>
      <li data-social="twitter"><a href="#">Twitter</a></li>
      <li data-social="pinterest"><a href="#">Pinterest</a></li>
    </ul>
  </div>
  <button>
    <span>Share</span>
  </button>
  `;
  card.appendChild(modal);
  console.log(card);
});
