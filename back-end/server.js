var express = require('express');
var app = express();
var axios = require('axios');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// make express look in the public directory for assets (css/js/img)
//app.use(express.static(__dirname + '/public'));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// set the dinners page route
app.get('/dinners', async function (req, res) {
  const dinners = await getAlbum("Gf7WUiwYNtbXCqKg6");
  // ejs render automatically looks in the views folder
  const data = extractPhotos(dinners);
  res.json(data);
});

// set the miscellaneous page route
app.get('/miscellaneous', async function (req, res) {
  const miscellaneous = await getAlbum("t3VKLpyf3jC6vS3o9");
  // ejs render automatically looks in the views folder
  const data = extractPhotos(miscellaneous);
  res.json(data);
});

// set the game nights page route
app.get('/gameNights', async function (req, res) {
  const gameNights = await getAlbum("KAMJ6QaSXFv54m4p9");
  // ejs render automatically looks in the views folder
  const data = extractPhotos(gameNights);
  res.json(data);
});

// set the cooking page route
app.get('/cooking', async function (req, res) {
  const cooking = await getAlbum("qevjaKjvCgzFBBn4A");
  // ejs render automatically looks in the views folder
  const data = extractPhotos(cooking);
  res.json(data);
});

async function getAlbum(id) {
  const response = await axios.get(`https://photos.app.goo.gl/${id}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  })
  return response.data
}

const regex = /"(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*",[0-9]*,[0-9]*)/g
function extractPhotos(content) {
  const links = []
  let match
  while (match = regex.exec(content)) {
    var first = match[1].split("\",");
    var second = first[1].split(",");
    links.push({
      src: first[0],
      width: parseInt(second[0]),
      height: parseInt(second[1])
    });
  }
  return links
}

app.listen(port, function () {
  console.log('Our app is running on http://localhost:' + port);
});
