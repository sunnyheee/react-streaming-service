import React from "react";
import "./MovieSilde.style.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard/MovieCard";

const MovieSilde = ({ title, movies, responsive }) => {
  return (
    <div className="popular-box">
      <h3>{title}</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSilde;
