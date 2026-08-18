# Random Quote Generator

A simple **Random Quote Generator** built using **HTML, CSS, and Vanilla JavaScript**.

Click the button to generate a random quote from a predefined list.

## Features

* 🎲 Generates a random quote
* 🖱️ Generates a new quote when the button is clicked
* 🎨 Simple and clean UI
* 📱 Responsive layout
* ⚡ Built with Vanilla JavaScript

## Technologies Used

* HTML5
* CSS3
* JavaScript

## How It Works

The quotes are stored inside a JavaScript array:

```javascript
const quotes = [
    "Believe in yourself.",
    "Never give up.",
    "Success takes time.",
    "Every day is a new beginning.",
    "You can do more than you think."
];
```

When the button is clicked, JavaScript generates a random index using:

```javascript
Math.floor(Math.random() * quotes.length)
```

The selected quote is then displayed on the webpage using the DOM.

## Project Structure

```text
Random-Qoute-Generator--JS/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## What I Learned

While building this project, I practiced:

* JavaScript arrays
* `Math.random()`
* `Math.floor()`
* DOM manipulation
* `getElementById()`
* `textContent`
* Button click events
* Connecting JavaScript to HTML
* Connecting CSS to HTML

## How to Run

1. Clone the repository.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Click **Generate Quote**.

## Future Improvements

* Add more quotes
* Add quote categories
* Add a copy-to-clipboard button
* Add animations
* Add a new quote API

---

Made by **Kylle Bantog**
