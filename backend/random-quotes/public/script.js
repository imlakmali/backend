// document.getElementById("myBtn").addEventListener("click", () => {

//   generateRandomQuote();
// });

$(document).ready(()=>{
  $("#myBtn").click(()=>{
    generateRandomQuote();
  });
  $("#searchBtn").click(()=>{
    generateQuoteByKeyword();
  })
})


// document.getElementById("searchBtn").addEventListener("click", () => {

//   generateQuoteByKeyword();
// });

// $(document).ready(()=>{
//   $("#searchBtn").click(()=>{
//     generateQuoteByKeyword();
//   })
// })


function generateRandomQuote() {

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/quotes", true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify({ type: "random" }));

  xhttp.onload = function () {
    
    let resData = JSON.parse(xhttp.responseText);

    $("#quoteText").html(resData.quote);
    $("#quoteAuthor").html(resData.author);
  };
}


function generateQuoteByKeyword() {

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/quotes", true);

  let inputKeywrd = document.getElementById("inputKeyword").value;

  xhttp.setRequestHeader("Content-Type", "application/json");

  xhttp.send({ "type": "search", "keyword": inputKeywrd , "include": "false" });

  xhttp.onload = function () {

    let resData = JSON.parse(xhttp.responseText);

    $("#quoteText").html(resData.quote);
    $("#quoteAuthor").html(resData.author);
      
      
  };
}



