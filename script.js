const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;


}

function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;

} 

function loading() {
    quoteContainer.hidden = false;
    loader.hidden = true;
    
}

function loading(){
    quoteContainer.hidden = false
}

let apiQuote = [];

function newQuote() {
    loading();
        const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];
       if(!quote.author){
        authorText.textContent = 'Unknown';
       }
       else{
        authorText.textContent = quote.author;
       }

       if (quote.text.lenght > 50) {
        quoteText.classList.add('long-quote');
       }
       else{
        quoteText.classList.remove('long-quote');
       }


        quoteText.textContent =quote.text;
        complete();
    }



async function getQuotes() {
    loading();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
            const response = await fetch(apiUrl);
            apiQuote = await response.json();
            newQuote();
    }
    catch (error){
        alert
    }
}

function tweetQuote(){
    const  twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');

}

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click',tweetQuote);

getQuotes();

