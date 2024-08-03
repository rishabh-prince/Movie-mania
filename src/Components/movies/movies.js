import React, { useEffect,useContext } from "react";
import axios from "axios";
import MoviesCard from "../MovieCard/MoviesCard";
import "./movies.css";
import { MovieContext } from "../../contexts/movieContext";
import { Link } from "react-router-dom";

const Movies = () => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGU0Y2FmYTMxMmE0OWFlY2E5MTVhOWZjYmJlMzVjYyIsIm5iZiI6MTcyMjU5ODEzMS42NTI5MjgsInN1YiI6IjY2YWJjY2Y4YWEwZjBmM2FiNDQ0YWQzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jTNTNeznwYMxkwGRvaHKEXdU5mT_fn4uOboPWmzXyE8";
  const {movies,addMovies}=useContext(MovieContext);
  console.log(movies);
  useEffect(() => {
    const getMoviesData = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response?.data?.results);
       addMovies(response?.data?.results);
    };
    getMoviesData();
  }, []);
  if(movies.length===0){
    return <h2>Loading....</h2>
  }
  return (
    <div className="movie-page">
      <h1>Movies</h1><hr/>
    
    <div className="movies">
      {movies.map((movie) => {
        return <Link to={`/movies/${movie.id}`} ><MoviesCard key={movie.id} value={movie} /></Link>;
      })}
    </div>
    </div>
  );
};

export default Movies;
