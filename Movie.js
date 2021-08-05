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


module.exports=Movie;
