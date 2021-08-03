'use strict';


const express = require('express');
const dotenv=require('dotenv');
const server = express();
const cors = require('cors');
const weatherData = require('./data/weather.json');
const {request}=require('express');

// const { setEnvironmentData } = require('worker_threads');
// const { send } = require('process');
dotenv.config();
server.use(cors());
const PORT = 3000;
// process.env.PORT;





server.get('/weather', (req, res) => {
  console.log(req.query);
    const lat=req.query.lat;
    const long=req.query.long;
  const searchQuery = req.query.searchQuery;

  let findCity = weatherData.find((item)=>{


  if (item.city_name == searchQuery || item.long == long || item.lat == lat) {
    console.log(item.city_name);

  }
  else{
    return'error 404 ';
  }
};


  class Forcast {
    constructor(date, description) {
      this.date = date;
      this.description = description;
    }


  }

  let newArr=[];

  findCity.data.map((value,idx)=>{
    newArr.push(new Forcast(value.datetime,`${value.low_temp},${value.high_temp},${value.weather.description}`));
  });



  console.log(findCity);
  res.send(findCity);

});
server.get('*', (req, res) => {
  res.status('404').send('page not found');
});





server.listen(PORT, () => {
  console.log(`I am listening on port ${PORT}`);

});


