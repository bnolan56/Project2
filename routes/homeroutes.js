var express = require("express");
const knex = require('../db/knex');
var router = express.Router()


// Basic Page Routes
router.get('/', function(req,res){
  res.render('index');
});

router.get('/about', function(req,res){
  res.render('about');
});

router.get('/contact', function(req,res){
  res.render('contact');
});

//Search Route
router.get('/search', function(req,res){
  userchoice = "%" + req.query.userInput + "%";
  const info = {
      beerName: [],
  }
  knex.select(
      'beer_name',
      'brewery_name',
      'beer_style',
      'id'
  ).from('beers').where('beer_name','like',userchoice).orWhere('beer_style', 'like', userchoice).orWhere('brewery_name', 'like', userchoice).limit(10)
  .then(function(results) {
    for (var i = 0; i <results.length; i++){
        info.beerName.push(results[i]);
    }
    res.render('searchresults', info);
  })
});


//DB 1 - 5  routes
router.get('/db', function(req,res){

  const info = {
      beerName: [],
  }
  knex.select(
      'beer_name',
      'brewery_name',
      'beer_style',
      'id'
  ).from('beers').limit(50)
  .then(function(results){
      for (var i = 0; i <results.length; i++){
          info.beerName.push(results[i]);
      }
      res.render('viewdb', info);
  })
});

router.get('/db2', function(req,res){

   const info = {
       beerName: [],
   }
   knex.select(
       'beer_name',
       'brewery_name',
       'beer_style',
       'id'
   ).from('beers').limit(50).offset(50)
   .then(function(results){
       for (var i = 0; i <results.length; i++){
           info.beerName.push(results[i]);
       }
       res.render('viewdb', info);
   })
 });
 router.get('/db3', function(req,res){

   const info = {
       beerName: [],
   }
   knex.select(
       'beer_name',
       'brewery_name',
       'beer_style',
       'id'
   ).from('beers').limit(50).offset(100)
   .then(function(results){
       for (var i = 0; i <results.length; i++){
           info.beerName.push(results[i]);
       }
       res.render('viewdb', info);
   })
 });
 router.get('/db4', function(req,res){

   const info = {
       beerName: [],
   }
   knex.select(
       'beer_name',
       'brewery_name',
       'beer_style',
       'id'
   ).from('beers').limit(50).offset(150)
   .then(function(results){
       for (var i = 0; i <results.length; i++){
           info.beerName.push(results[i]);
       }
       res.render('viewdb', info);
   })
 });
 router.get('/db5', function(req,res){

   const info = {
       beerName: [],
   }
   knex.select(
       'beer_name',
       'brewery_name',
       'beer_style',
       'id'
   ).from('beers').limit(50).offset(200)
   .then(function(results){
       for (var i = 0; i <results.length; i++){
           info.beerName.push(results[i]);
       }
       res.render('viewdb', info);
   })
 });


//Brewery Route
router.get('/brewery/:id', function(req,res){
    const breweryChoice = '%'+req.params.id+'%';

    const info = {
        beerName: [],
        beerData: []
    }

      knex.select(
      'brewery_name',
      'brewery_type',
      'brewery_city',
      'brewery_state',
      'brewery_pic',
      'brewery_website',
      'beer_style',
      'beer_logo',
      'beer_name',
      'id'
    ).from('beers').where('brewery_name',"like", breweryChoice).limit(12)
      .then(function(results){

        var stringy = JSON.stringify(results);
        var breweriez = JSON.parse(stringy);
        var goodtogo = breweriez[0];
        info.beerData.push(goodtogo);
        for (var i = 0; i<breweriez.length; i++){
            var beers = breweriez[i];
            info.beerName.push(beers);
        }
        res.render('brewery', info)
      })
  });

//Beer Route
router.get('/beer/:id', function(req,res){
    const beerid = req.params.id
    console.log(beerid)
  knex.select(
      'beer_name',
      'beer_abv',
      'beer_ibu',
      'beer_style',
      'beer_description',
      'beer_logo',
      'brewery_name',
      'id'
  ).from('beers').where('id',beerid)
  .then(function(results){
      var stringy = JSON.stringify(results);
      var beerz = JSON.parse(stringy);
      var goodtogo = beerz[0]
      res.render('beer', goodtogo)
  })
});

//Submit Brewery GET / POST Routes
router.get('/submit', function(req,res){
  res.render('submit');
});

// router.post('', function(req,res){
//   var beerSubmission = req.params;
//   // res.send(beerSubmission);
//   // res.send('submitted');
// });

module.exports = router
