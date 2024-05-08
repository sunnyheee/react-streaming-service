import React from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { data: genreData } = useMovieGenreQuery();

  const getGenreNames = (genreIdList) => {
    if (!genreData) return [];
    return genreIdList
      .map((id) => {
        const genreObj = genreData.find((genre) => genre.id === id);
        return genreObj ? genreObj.name : "Unknown";
      });
  };

  const backgroundImageUrl = `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.backdrop_path}`;


  return (
    <div
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      className="movie-card"
      onClick={() => navigate(`/movies/${movie.id}`)}
    >
      <div className="overlay">
        <h1>{movie.title}</h1>

        <ul className="category-box">
          {getGenreNames(movie.genre_ids).map((id, i) => (
            <li key={i}>
              <Badge bg="danger" className="category-item">
                {id}
              </Badge>
            </li>
          ))}
        </ul>
        <div>
          <div>average : {movie.vote_average}</div>
          <div>popularity : {movie.popularity}</div>
          <div>adult : {movie.adult ? "over 18" : "ALL"}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
