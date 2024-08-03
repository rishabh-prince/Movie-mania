import React, { useContext } from 'react'
import { MovieContext } from '../../contexts/movieContext'
import { useParams } from 'react-router-dom';
import "./MovieDetails.css";
import Seats from "../Seats/Seats"

const MovieDetails = () => {
    const {movies}=useContext(MovieContext);
    console.log(movies);
    const {movieId}=useParams();
    console.log(movieId);
   const IMG_URL = "https://image.tmdb.org/t/p/original/";

  const {poster_path,title,vote_average,release_date,overview}=movies.find((movie)=>movie.id===Number(movieId));
  return (
    <div className="movie-details">
      <div className="movie-description">
        <img src={IMG_URL+poster_path} alt="Movie Poster" />
        <h3>{title}</h3>
        <h3>{vote_average} stars</h3>
        <h4>In cinemas : {release_date}</h4>
        <p>{overview}</p>
      </div>
      <Seats/>
    </div>
  );
}

export default MovieDetails