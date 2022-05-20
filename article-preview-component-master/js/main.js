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
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="13"
    >
    <path
        fill="#fff"
        d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
    />
    </svg>
    <span>Share</span>
  </button>
  `;
  card.appendChild(modal);
});
