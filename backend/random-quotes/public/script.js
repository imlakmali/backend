$(document).ready(() => {

  $("#myBtn").click(() => {

    generateRandomQuote();

  });

  $("#searchBtn").click(() => {

    generateQuoteByKeyword();

  });
});



function generateRandomQuote() {

  $.ajax({
    
    url: "/quotes",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({ type: "random" }),
    success: function(resData) {
      $("#quoteText").html(resData.quote);
      $("#quoteAuthor").html(resData.author);
    }

  });

}



function generateQuoteByKeyword() {

  let inputkeyword = $("#inputKeyword").val();  
  let includeAll = $("#myCheckbox").is(":checked");
  // console.log("inputKeyword", inputKeyword)

  $.ajax({
    url: "/quotes",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({ type: "search", keyword: inputkeyword, include: includeAll }),
    success: function(resData) {

      console.log("res data", resData)

   $("#quoteText").html(resData.quote);
   $("#quoteAuthor").html(resData.author);
    }
  });
}





// function generateRandomQuote() {

//   const xhttp = new XMLHttpRequest();
//   xhttp.open("POST", "/quotes", true);
//   xhttp.setRequestHeader("Content-Type", "application/json");
//   xhttp.send(JSON.stringify({ type: "random" }));

//   xhttp.onload = function () {
    
//     let resData = JSON.parse(xhttp.responseText);

//     $("#quoteText").html(resData.quote);
//     $("#quoteAuthor").html(resData.author);
//   };
// }



// function generateQuoteByKeyword() {

// const xhttp = new XMLHttpRequest();
//   xhttp.open("POST", "/quotes", true);

//   let inputKeywrd = document.getElementById("inputKeyword").value;

//   xhttp.setRequestHeader("Content-Type", "application/json");

//   xhttp.send({ "type": "search", "keyword": inputKeywrd , "include": "false" });

//   xhttp.onload = function () {

//     let resData = JSON.parse(xhttp.responseText);

//     $("#quoteText").html(resData.quote);
//     $("#quoteAuthor").html(resData.author);
      
      
//   };
// }