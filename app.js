// $(document).ready(function() {
//     // Add smooth scrolling to all links
//     $("a").on("click", function(event) {
//         // Make sure this.hash has a value before overriding default behavior
//         if (this.hash !== "") {
//             // Prevent default anchor click behavior
//             event.preventDefault();

//             // Store hash
//             var hash = this.hash;

//             // Using jQuery's animate() method to add smooth page scroll
//             // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//             $("html, body").animate({
//                     scrollTop: $(hash).offset().top,
//                 },
//                 800,
//                 function() {
//                     // Add hash (#) to URL when done scrolling (default click behavior)
//                     window.location.hash = hash;
//                 }
//             );
//         } // End if
//     });
// });

// // for subscribe button
// function subscribe() {
//     alert(`thanks for subscribing.`)

// }




const quotesDisplay = document.querySelector('.quote')


let localquotes = [

    {
        quote: "welcome to oracle novel. use the next story to read all uploaded stories on this website ",
        author: "oracle",
        price: " ",
        link: "https://google.com"

    }
];
let quotes = JSON.parse(localStorage.getItem('quotes'))
if (!quotes) {
    quotes = localquotes
    localStorage.setItem('quotes', JSON.stringify(localquotes))
}
let count = 0
    // read on json and event
function generateRandomNumber() {
    const el = quotes[count];
    quotesDisplay.innerHTML = `<div>
                <h2> ${el.author}</h2>
                <p>${el.quote}</p>
                <h5>To Read More </h5>
                 <p class="price">price: <i class="color-c">${el.price} naira</i></p>
                 
            </div>
            `
    count = count < quotes.length - 1 ? count + 1 : 0
}
generateRandomNumber()

function paymentLink() {
    let index = quotes[count - 1]
    console.log(index.link);
    let anchor = document.createElement("a")
    anchor.href = index.link
    anchor.target = "_blank"
    anchor.click()
    location.replace(index.link)

}