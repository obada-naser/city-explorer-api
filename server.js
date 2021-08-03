
'use strict';





require('dotenv').config();
const express = require('express');

const cors = require('cors');

const weather = require('./data/weather.json');


const server = express();

server.use(cors());


const PORT = process.env.PORT || 3001;


server.get('/weather', weatherMethod);

function weatherMethod(req, res) {
  let searchQuery = req.query.searchQuery;

  const findCity = weather.find(findCity => findCity.city_name.toLowerCase() === searchQuery.toLowerCase());

  // const findCity = weather.find((item) => {
  //   if (item.city_name.toLowerCase() === searchQuery.toLowerCase());




  // });
  if (findCity !== undefined) {
    const arrWeather = findCity.data.map(item => new Forcast(item));
    res.status(200).send(arrWeather);

  }

  else {
    res.status(500).send('there is an error');
  }
}

  class Forcast {
  constructor(item) {
    this.date = item.valid_date;
    this.description = item.weather.description;
  }

}


server.use('*', (req, res) => res.status(404).send('page not found'));



server.listen(PORT, () => console.log(`hello from the port num ${PORT}`));













