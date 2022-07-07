let quotes = JSON.parse(localStorage.getItem('quotes')) || [];

function addQuote() {
    let quoteInput = document.querySelector('#new-quote')
    let authorInput = document.querySelector('#new-author')
    let quote = quoteInput.value
    let author = authorInput.value
    quotes.push({ quote, author })
    quoteInput.value = ''
    authorInput.value = ''

    localStorage.setItem('quotes', JSON.stringify(quotes))
}