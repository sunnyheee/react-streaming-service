import React from "react";
import { Alert } from "bootstrap";
import MovieSilde from "../../../../common/MovieSilde/MovieSilde";
import { usePopulerMoviceQuery } from "../../../../hooks/usePopulerMovice";

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

const PopularMovieSilde = () => {
  const { data, isLoading, isError, error } = usePopulerMoviceQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <MovieSilde
        title="Popular Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default PopularMovieSilde;
