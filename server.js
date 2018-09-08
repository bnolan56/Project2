var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;
var app = express();
// const knex = require('./db/knex');
const beers = require('./routes/homeroutes');


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());  

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use('/', beers);


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  