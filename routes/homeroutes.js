var express = require("express");
const knex = require('../db/knex');
var router = express.Router()

router.get('/', function(req,res,next){
    res.render('index');
});

router.get('/search', function(req,res){
    userchoice = "odell"+"%"
    knex.select(
        'beer_name',
        'brewery_name',
        'beer_style',
        'id'
    ).from('beers').where('beer_name','like',userchoice).orWhere('beer_style', 'like', userchoice).orWhere('brewery_name', 'like', userchoice).limit(10)
    .then(function(test){
        
        res.send(test);
    })
  });

router.get('/brewery/:id', function(req,res){
    const breweryid = req.body.id
      knex.select(
      'brewery_name',
      'brewery_type',
      'brewery_city',
      'brewery_state',
      'brewery_pic',
      'brewery_website',
      'beer_name'
    ).from('beers')
      .then(function(test){
          res.send(test)
      })
  });

  router.get('/beer/:id', function(req,res){
      const beerid = req.body.id
    knex.select(
        'beer_name',
        'beer_abv',
        'beer_ibu',
        'beer_style',
        'beer_description',
        'beer_logo',
        'brewery_name',
    ).from('beers').whereRaw('id=?',[beerid])
    .then(function(test){
        res.send(test)
    })
});
  

module.exports = router