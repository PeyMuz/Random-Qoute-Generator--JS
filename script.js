const quotes = [
    "Believe in yourself.",
    "Never give up.",
    "Success takes time.",
    "Every day is a new beginning.",
    "You can do more than you think."
];


const el = document.getElementById("text");
const btn = document.getElementById("btn");

btn.onclick = function() { // Everytime a button click, it will generate random code

    const random = quotes[quotes.length - 1 - Math.floor(Math.random() * quotes.length)];

    el.textContent = random;

}


