$(function() {

  $("#Search").on("submit", function (e) {
    e.preventDefault();

    let userInput = $("#searchInput").val().trim();
    

    window.location.href = "/search?userInput=" + encodeURI(userInput);
  });


});

