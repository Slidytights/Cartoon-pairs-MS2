const cards = document.querySelectorAll(".game-card");

let cardTurned = false;
let holdCard = false;
let card1, card2;

function turnCard() {

    if (holdCard) return;

    this.classList.add("turn");

    if (!cardTurned) {
        cardTurned = true;
        card1 = this;
    } else {
        cardTurned = false;
        card2 = this;

        doesItMatch();
      
    }
}

function doesItMatch () {
      if (card1.dataset.card === card2.dataset.card) {
          freezeCards();

        } else {
          resetCards();
    }
}

function freezeCards () {
        card1.removeEventListener("click", turnCard);
        card2.removeEventListener("click", turnCard);
}

function resetCards() {

    holdCard = true;

     setTimeout(() => {
        card1.classList.remove("turn");
        card2.classList.remove("turn");

        holdCard = false;   

    },  3500);
}

cards.forEach(card => card.addEventListener("click", turnCard));