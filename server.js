
'use strict';





require('dotenv').config();
const express = require('express');

const cors = require('cors');

// const weather = require('./data/weather.json');
const { default: axios } = require('axios');


const server = express();

server.use(cors());


const PORT = process.env.PORT;

// || 3001;
// server.get('/weather', weatherMethod);
server.get('/weather-bit', forcastMethod);

server.get('/movie', movieGetter);

// function weatherMethod(req, res) {
//   let searchQuery = req.query.searchQuery;

//   const findCity = weather.find(findCity => findCity.city_name.toLowerCase() === searchQuery.toLowerCase());

//   // const findCity = weather.find((item) => {
//   //   if (item.city_name.toLowerCase() === searchQuery.toLowerCase());




//   // });
//   if (findCity !== undefined) {
//     const arrWeather = findCity.data.map(item => new Forcast(item));
//     res.status(200).send(arrWeather);

//   }

//   else {
//     res.status(500).send('there is an error');
//   }
// }
// IMG='https://image.tmdb.org/t/p/w500'
async function forcastMethod(req, res) {
  let { lat, lon } = req.query;

  const url = `http://api.weatherbit.io/v2.0/forecast/daily?key=17282a5fe9c245fb94f593b6859b43c0&lon=${lon}&lat=${lat}`;


  const gettingWeather = await axios.get(url);

  const weatherArr = gettingWeather.data.data.map(item => new Forcast(item));

  res.send(weatherArr);


}


async function movieGetter(req, res) {
  let {searchQuery} = req.query;
  try{

  const url = `http://api.themoviedb.org/3/search/movie?api_key=65909b684f9fcdb402457b5f66e91070&query=${searchQuery}`;

  const findMovie = await axios.get(url);

  const movieTheater = findMovie.data.results.map(item => new Movie(item));

  console.log(movieTheater);
  res.send(movieTheater);
  }

  catch(error) {
    res.status(300).send('loading');
  }


}

class Movie {
  constructor(value) {
    this.title = value.title;
    this.overview = value.overview;
    this.vote_average = value.vote_average;
    this.vote_count = value.vote_count;
    this.poster_path =`https://image.tmdb.org/t/p/w500${value.poster_path}`;
    this.popularity = value.popularity;
    this.release_date = value.release_date;


  }
}
// process.env.IMG

class Forcast {
  constructor(value) {
    this.date = value.valid_date;
    this.description = value.weather.description;
  }

}


server.use('*', (req, res) => res.status(404).send('page not found'));



server.listen(PORT, () => console.log(`hello from the port num ${PORT}`));













