const cards = document.querySelectorAll(".game-card");

function turnCard() {
    this.classList.toggle("turn");
}

cards.forEach(card => card.addEventListener("click", turnCard));