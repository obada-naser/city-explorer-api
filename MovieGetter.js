
const axios = require('axios');

const Movie = require('./Movie');


async function movieGetter (req, res) {
  let { searchQuery } = req.query;
  try {

    const url = `http://api.themoviedb.org/3/search/movie?api_key=65909b684f9fcdb402457b5f66e91070&query=${searchQuery}`;

    const findMovie = await axios.get(url);

    const movieTheater = findMovie.data.results.map(item => new Movie(item));

    console.log(movieTheater);
    res.send(movieTheater);
  }

  catch (error) {
    res.status(300).send('loading');
  }


}
module.exports = movieGetter;