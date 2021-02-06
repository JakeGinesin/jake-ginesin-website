const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();

app.use('/public', express.static('public'));
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'publicpages/index.html'));
  console.log("main page loaded");
});

app.get('/test', function(req, res){
  res.send("test");
});

app.listen(process.env.PORT || 3000, function(err){
  if (err) console.log(err);
  console.log("hosting started.");
});
