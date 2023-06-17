var quotes = [
"Any foor can wite code that aa computer can understand. Good programmers write code that humans can understand.",
"First, Solve the problem. Then,write the code.",
"Experience is the name everyone gives to their mistakes.",
"Java is to JavaScript what a car is to a carpet.",
"Somethines it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
]

function getQuote(){
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber];
}

