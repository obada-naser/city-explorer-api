'use strict';


const express =require('express');

const server=express();
const cors=require('cors');
const weatherData=require('./data/weather.json');
const { setEnvironmentData } = require('worker_threads');
const { send } = require('process');


const PORT=3000;
// process.env.PORT;





server.get('/weather',(req,res)=>{
  console.log(req.query);
//   const lat=req.query.lat;
//   const long=req.query.long;
  const searchQuery=req.query.city_name;
 


  let findCity=weatherData.find(item=>{
    if(item.city_name===searchQuery){
      return [item.searchQuery,item.lat,item.long];

    }
    else{
      return'error';
    }




  });
  
  console.log(findCity);
  res.send(findCity);

});
server.get('*',(req,res)=>{
    res.status('404').send('page not found');
})





server.listen(PORT,()=>{
  console.log(`I am listening on port ${PORT}`);

});


