let shadow = document.querySelector(".content");
let fullpage = document.querySelector(".container");
let quote = document.querySelector(".quote");
let authorwrote = document.querySelector(".author");

function random() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  shadow.style = `border: 2px solid #${randomColor};
  box-shadow: #${randomColor} 0px -12px 30px, #${randomColor} 0px 4px 30px,
    #${randomColor} 0px 12px 30px;`;
}

function randomQuote() {
  fetch("https://api.quotable.io/random?maxLength=150")
    .then((data) => data.json())
    .then((obj) => {
      random();
      quote.textContent = obj.content;
      authorwrote.textContent = `--${obj.author}`;
    });
}

// shadow.addEventListener("click", randomQuote);
fullpage.addEventListener("click", randomQuote);
randomQuote();
