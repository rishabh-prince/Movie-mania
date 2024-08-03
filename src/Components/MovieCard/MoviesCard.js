import React from "react";
import "./Moviecard.css";

const MoviesCard = ({value}) => {
  const IMG_URL = "https://image.tmdb.org/t/p/original/";
  const { title, poster_path, vote_average, release_date }=value;
  return (
    <div className="moviecard">
      <img src={IMG_URL + poster_path} alt="movie poster" />
      <h3>{title}</h3>
      <h3>{vote_average} stars</h3>
      <h4>In cinemas : {release_date}</h4>
    </div>
  );
};

export default MoviesCard;
