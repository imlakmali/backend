document.getElementById("myBtn").addEventListener("click", () => {

  generateRandomQuote();
});


document.getElementById("searchBtn").addEventListener("click", () => {

  generateQuoteByKeyword();
});


function generateRandomQuote() {

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/quotes", true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify({ type: "random" }));

  xhttp.onload = function () {
    
    let resData = JSON.parse(xhttp.responseText);

    document.getElementById("quoteText").innerHTML = resData.quote;
    document.getElementById("quoteAuthor").innerHTML = resData.author;
  };
}


function generateQuoteByKeyword() {

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/quotes", true);

  let inputKeywrd = document.getElementById("inputKeyword").value;

  xhttp.setRequestHeader("Content-Type", "application/json");

  xhttp.send(JSON.stringify({ type: "search", keyword: inputKeywrd }));

  xhttp.onload = function () {

    let resData = JSON.parse(xhttp.responseText);

      document.getElementById("quoteText").innerHTML = resData.quote;
      document.getElementById("quoteAuthor").innerHTML = resData.author;
  
  };
}



