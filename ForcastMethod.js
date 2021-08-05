


const axios=require('axios');

let Forcast=require('./Forcast');


async function forcastMethod(req, res){
    let { lat, lon } = req.query;
  
    const url = `http://api.weatherbit.io/v2.0/forecast/daily?key=17282a5fe9c245fb94f593b6859b43c0&lon=${lon}&lat=${lat}`;
  
  
    const gettingWeather = await axios.get(url);
  
    const weatherArr = gettingWeather.data.data.map(item => new Forcast(item));
  
    res.send(weatherArr);
  
  
  }
  
  
  module.exports=forcastMethod;



  