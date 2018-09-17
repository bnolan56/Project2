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

  //capture brewery object
  $("#brewSubmit").on("click", function (e) {
    e.preventDefault();
    
    let breweryName = $("#brewName").val().trim();
    let breweryCity = $("#brewCity").val().trim();
    let breweryState = $("#brewState").val().trim();
    let breweryWeb = $("#brewSite").val().trim();
    let breweryImg = $("#brewPic").val().trim();
    
    let breweryObj = [breweryName, breweryCity, breweryState, breweryWeb, breweryImg]
    window.location.href = "/submitbrewery?breweryOBj=" + encodeURI(breweryObj);
    console.log(breweryObj)
    
    $('.formDiv').html('<h3><span uk-icon="icon: check; ratio: 2"></span> Submitted!</h3>'
    + '<p>Thank you for your submission! Your Brewery has been added to the Foam DB!</p>' + '</div>');
    });
    
    

  // capture beer object
  $("#beerSubmit").on("click", function (e) {
    e.preventDefault();

    let beerName = $("#beerName").val().trim();
    let breweryName = $("#brewName1").val().trim();
    let beerABV = $("#beerABV").val().trim();
    let beerIBU = $("#beerIBU").val().trim();
    let beerStyle = $("#beerStyle").val().trim();
    let beerDescrip = $("#beerDescrip").val().trim();
    let beerImg = $("#beerImg").val().trim();

    let beerObj = [beerName, breweryName, beerABV, beerIBU, beerStyle, beerDescrip, beerImg]
    window.location.href = "/submitbeer?beerOBj=" + encodeURI(beerObj);
    console.log(beerObj)

    $('.formDiv2').html('<h3><span uk-icon="icon: check; ratio: 2"></span> Submitted!</h3>'
    + '<p>Thank you for your submission! Your Beer has been added to the Foam DB!</p>' + '</div>');
  });
});
