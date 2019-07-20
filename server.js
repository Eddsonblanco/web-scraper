const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");

// const db = require("./models");

const PORT = process.env.PORT || 8080;


const app = express();
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: ('main') }));
app.set('view engine', 'handlebars');

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));
// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true })
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));;
         


// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Mongo-scraper";

mongoose.connect(MONGODB_URI);

// Start the server
app.listen(PORT, () => {
  console.log("App running on port " + PORT + "!");
});