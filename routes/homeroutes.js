var express = require("express");
const knex = require('../db/knex');
var router = express.Router()



router.get('/', function(req,res,next){
    res.render('index');
});

router.get('/about', function(req,res,next){
    res.render('about');
});

router.get('/contact', function(req,res,next){
    res.render('contact');
});

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
    .then(function(results){
        for (var i = 0; i <results.length; i++){
            info.beerName.push(results[i]);
        }
        res.render('searchresults', info);
    })
  });

router.get('/brewery/:id', function(req,res){
    const breweryChoice = req.params.id;
    
   console.log(breweryChoice)
   
      knex.select(
      'brewery_name',
      'brewery_type',
      'brewery_city',
      'brewery_state',
      'brewery_pic',
      'brewery_website',
      'beer_name',
      'id'
    ).from('beers').where('id', breweryChoice)
      .then(function(results){
        var stringy = JSON.stringify(results);
        var breweriez = JSON.parse(stringy);
        var goodtogo = breweriez[0]
        res.render('brewery', goodtogo)
      })
  });

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


module.exports = router
