let quotes = JSON.parse(localStorage.getItem('quotes')) || [];

function addQuote() {
    let quoteInput = document.querySelector('#new-quote')
    let authorInput = document.querySelector('#new-author')
    let priceInput = document.querySelector('#p-price')
    let linkInput = document.querySelector('#p-link')
    let quote = quoteInput.value
    let author = authorInput.value
    let price = priceInput.value
    let link = linkInput.value
    quotes.push({ quote, author, price, link })
    quoteInput.value = ''
    authorInput.value = ''
    priceInput.value = ''
    linkInput.value = ''

    localStorage.setItem('quotes', JSON.stringify(quotes))
}