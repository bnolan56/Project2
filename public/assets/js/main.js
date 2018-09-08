$(function() {

  $("#Search").on("submit", function (e) {
    e.preventDefault();

    let userInput = $("#searchInput").val().trim();
    console.log(userInput)

    window.location.href = "/search?userInput=" + encodeURI(userInput);
  });
});
