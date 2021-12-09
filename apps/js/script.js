const quoteText = document.querySelector(".quote"),
quoteName = document.querySelector(".name"),
quoteBtn = document.querySelector("button");

function randomQuote(){
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result);
        quoteText.innerText = result.content;
        quoteName.innerText = result.author;

    });
}

quoteBtn.addEventListener("click", randomQuote);