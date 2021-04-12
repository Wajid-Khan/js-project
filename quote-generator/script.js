const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuotesBtn = document.getElementById('new-quote');
const twitterBtn = document.getElementById('twitter');
const loader = document.getElementById('loader');

let apiQuotes = [];

//Showing Loader
function loading()
{
    quoteContainer.hidden = true;
    loader.hidden = false;
}

// Complete

function complete()
{
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show new quotes
function newQuotes()
{
    loading();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //Check if author field is empty and replace with 'Unknown'
    if (!quote.author)
    {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }

    // check the long quote and determine style
    if (quote.text.length > 120){
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    //Set quote, hide loader
    quoteText.textContent = quote.text;
    complete();
}

// Get Quotes from API
async function getQuotes(){
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes);
        newQuotes();
        // console.log(apiQuotes);
    } catch (error){
        // catch error here
    }
}

//Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listener
newQuotesBtn.addEventListener('click', newQuotes);
twitterBtn.addEventListener('click', tweetQuote);


//On Load 
getQuotes();
// loading();
