import React from "react";
import MovieSilde from "../../../../common/MovieSilde/MovieSilde";
import { useUpcommingMoviesQuery } from "../../../../hooks/usePopulerMovice";
import { Alert } from "bootstrap";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const UpcommingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpcommingMoviesQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSilde
        title="Upcomming Movie"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default UpcommingMovieSlide;
