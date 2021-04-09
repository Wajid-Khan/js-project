let apiQuotes = [];

// Show new quotes
function newQuotes()
{
    const quote = apiQuotes[Math.floor(Math.random()) * apiQuotes.length];
    console.log(quote);
}

// Get Quotes from API
async function getQuotes(){
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

getQuotes();
