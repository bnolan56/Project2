// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const knex = require('./db/knex');
const beers = require('./routes/homeroutes');

// Public Dir
// =============================================================
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// API Routes
// =============================================================
app.use('/', beers);


// Starts the server to begin listening
// =============================================================
const PORT = process.env.PORT || 8080;

app.listen(PORT, function(error, response) {
  if (error) {
      console.log(error);
  }
  console.log(`Application listening on ${PORT}`);
})
