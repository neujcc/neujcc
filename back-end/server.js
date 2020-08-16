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

// set the gallery page route
app.get('/gallery', async function (req, res) {
  const gallery = await getAlbum("y7aMwVyG21FDSQqU9");
  // ejs render automatically looks in the views folder
  const data = extractPhotos(gallery);
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
