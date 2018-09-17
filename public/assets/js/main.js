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

    let breweryObj = {
      name: breweryName,
      city: breweryCity,
      state: breweryState,
      website: breweryWeb,
      pic: breweryImg
    }

    console.log(breweryObj)

    $('.formDiv').html('<h3><span uk-icon="icon: check; ratio: 2"></span> Submitted!</h3>'
    + '<p>Thank you for your submission! Your Brewery has been added to the Foam DB!</p>' + '</div>');
  });

  // capture beer object
  $("#beerSubmit").on("click", function (e) {
    e.preventDefault();

    let beerName = $("#beerName").val().trim();
    let breweryName = $("#brewName").val().trim();
    let beerABV = $("#beerABV").val().trim();
    let beerIBU = $("#beerIBU").val().trim();
    let beerImg = $("#beerStyle").val().trim();
    let beerDescrip = $("#beerDescrip").val().trim();
    let beerImg = $("#beerImg").val().trim();

    let beerObj = {
      name: beerName,
      breweryName: breweryName,
      abv: beerABV,
      ibu: beerIBU,
      description: beerDescrip,
      style: beerStyle,
      pic: beerImg
    }

    console.log(beerObj)

    $('.formDiv2').html('<h3><span uk-icon="icon: check; ratio: 2"></span> Submitted!</h3>'
    + '<p>Thank you for your submission! Your Beer has been added to the Foam DB!</p>' + '</div>');
  });
});
