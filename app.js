const btnQ = document.getElementById("newQ")
const quotes = document.getElementById("quotes");
const tweetMe = document.getElementById("tweet")
const author = document.getElementById("author");
let realData = "";
let quotesData = "";

const tweetNow = () => {
    const tweet = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author} `;
    window.open(tweet)
}

const getNewQuotes = () =>{

    let random = Math.floor(Math.random() * 1643 + 1);

    quotesData = realData[random];

    quotes.innerText = `${quotesData.text}`;

    quotesData.author == null
   ? author.innerText = "unKnown"
   : author.innerText = `${quotesData.author}`
}

const getQuotes = async () =>{
    const api = 'https://type.fit/api/quotes';
    try{
        let data = await fetch(api);

        realData = await data.json();
        getNewQuotes();

        
        
    }
    catch(error){

    }
}

btnQ.addEventListener("click", getNewQuotes);
tweetMe.addEventListener("click", tweetNow)
getQuotes();