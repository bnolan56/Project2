const rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');

const options = {
    uri: 'https://api.untappd.com/v4/search/beer?q=cerebral&limit=1&offset=0&client_id=98D7D31432878C9463FCD575A4D3BA747D61B83E&client_secret=0EAD8482B5EBE2EA993D7F31726DA8AA11D1B270',

    json: true,
    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(options)
    .then(function (data) {
        var beers = data._root.children
        for (var i = 0; i < beers.length; i++) {
            var beers2 = beers[i].response.beers.items
            console.log(beers2)
           
            for (var k = 0; k < beers2.length; k++) {
                var beers3 = beers2[k].beer;
                var beerBrewery = beers2[k].brewery
                var breweryName = beerBrewery.brewery_name;
                var breweryType = beerBrewery.brewery_type;
                var breweryLabel = beerBrewery.brewery_label;
                var breweryWebsite = beerBrewery.contact.url;
                var breweryCity = beerBrewery.location.brewery_city;
                var breweryState = beerBrewery.location.brewery_state;
                var breweryLat = beerBrewery.location.lat;
                var breweryLon = beerBrewery.location.lng;
                var beerName = beers3.beer_name;
                var beerLabel = beers3.beer_label;
                var beerABV = beers3.beer_abv;
                var beerIBU = beers3.beer_ibu;
                var beerDescription = JSON.stringify(beers3.beer_description)
                let beerDescription2 = beerDescription.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'_');
                let beerDescription3 = beerDescription2.replace(/_/g, "");
                let beerDescription4 = JSON.stringify(beerDescription3);
              
                var beerStyle = beers3.beer_style;
                // var breweryStats =[breweryName,breweryType,breweryCity,breweryState,breweryLat,breweryLon,breweryLabel,breweryWebsite]
                // var breweryStatsFinal = breweryStats.join();
                var beerstats = [beerName, beerABV, beerIBU, beerStyle, beerDescription4, beerLabel,breweryName,breweryType,breweryCity,breweryState,breweryLat,breweryLon,breweryLabel,breweryWebsite];
                let beerOfficial = beerstats.join();
                console.log(beerOfficial)

                 fs.appendFile("specificbreweries.csv",beerOfficial+"\n",function(err){
                     if(err){
                         console.log(err)
                     }
                 })
              

            }

        }
    }).catch(function (err) {
        console.log(err)
    });

