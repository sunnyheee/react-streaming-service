import React from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const gerneNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });

    return gerneNameList;
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.backdrop_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1>{movie.title}</h1>

        <ul className="category-box">
          {showGenre(movie.genre_ids).map((id, i) => (
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
