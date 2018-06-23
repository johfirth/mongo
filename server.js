const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cheerio = require('cheerio');

const db = require('./models');

const PORT = process.env.PORT || 8443
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/mongoose')

require('./routes/apiroute')(app);
require('./routes/htmlroutes')(app);

app.listen(PORT, function(){
  console.log('App listening on Port: ' + PORT)
});