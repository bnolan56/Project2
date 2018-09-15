$(function() {

  $("#Search").on("submit", function (e) {
    e.preventDefault();

    let userInput = $("#searchInput").val().trim();


    window.location.href = "/search?userInput=" + encodeURI(userInput);
  });


  $('#formSubmit').on("click", function() {
    console.log('has been clicked');
    $('.formDiv').html('<div>' + '<h3><span uk-icon="icon: check; ratio: 2"></span> Submitted!</h3>'
    + '<p>Thank you for your message! We will contact you as soon as we can!</p>' + '</div>');
  });

  // $('#demo').pagination({
  //   dataSource: [1, 2, 3, 4, 5, 6, 7, ... , 103],
  //   callback: function(data, pagination) {
  //     // template method of yourself
  //     var html = template(data);
  //     dataContainer.html(html);
  //   }
  // })
});
