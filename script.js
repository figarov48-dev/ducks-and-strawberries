const startBtn = document.getElementById("startBtn");

const home = document.getElementById("home");
const cards = document.getElementById("cards");

const star = document.getElementById("star");

const sofiaCard = document.querySelector(".sofia");
const rachelCard = document.querySelector(".rachelCard");

const backArrow = document.querySelector(".backArrow");

const sofia = document.getElementById("sofia");
const rachel = document.getElementById("rachel");

const endArrow =
document.querySelector(".endArrow");

const ending =
document.getElementById("ending");


// HOME → CARDS

startBtn.addEventListener("click", () => {

    home.classList.remove("active");
    cards.classList.add("active");

    setTimeout(() => {

        star.classList.add("flyStar");

    }, 1000);

    setTimeout(() => {

        sofiaCard.classList.add("unlocked");
        sofiaCard.querySelector(".lock").textContent = "🔓";

    }, 3000);

});


// CARDS → SOFIA

sofiaCard.addEventListener("click", () => {

    if (
        sofiaCard.querySelector(".lock").textContent === "🔓"
    ) {

        home.classList.remove("active");
        cards.classList.remove("active");
        rachel.classList.remove("active");

        sofia.classList.add("active");

    }

});


// SOFIA → CARDS

backArrow.addEventListener("click", () => {

    sofia.classList.remove("active");

    cards.classList.add("active");

    setTimeout(() => {

        rachelCard.classList.add("unlocked");

        rachelCard.querySelector(".lock").textContent = "🔓";

    }, 1500);

});


// CARDS → RACHEL

rachelCard.addEventListener("click", () => {

    if (
        rachelCard.querySelector(".lock").textContent === "🔓"
    ) {

        home.classList.remove("active");
        cards.classList.remove("active");
        sofia.classList.remove("active");

        rachel.classList.add("active");

    }

});

endArrow.addEventListener("click", () => {

    rachel.classList.remove("active");

    ending.classList.add("active");

});