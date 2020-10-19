// animation link
AOS.init();

const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQuotes = document.getElementById("newQuotes");
let realData = "";
let quotesData = "";
const getNewQuotes = () => {
  let randm = Math.floor(Math.random() * 1000);
  quotesData = realData[randm];
  quotes.innerText = `${quotesData.text}`;
  quotesData.author === null
    ? (author.innerText = `by:-Pawan Chauhan`)
    : (author.innerText = `by:-${quotesData.author}`);
};
const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";

  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuotes();
  } catch (error) {}
};
newQuotes.addEventListener("click", getNewQuotes);
getQuotes();
