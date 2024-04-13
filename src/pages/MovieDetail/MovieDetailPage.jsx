import React from "react";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import Alert from "react-bootstrap/Alert";
import MovieDetailInfo from "./components/MovieDetailInfo/MovieDetailInfo";
import MovieReview from "./components/MovieReview/MovieReview";
import { useRecommendMoviesQuery } from "../../hooks/useMovieRecommend";

const MovieDetailPage = () => {
  const { id } = useParams();
  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useMovieDetailQuery({ id });
  const { data: recommendData } = useRecommendMoviesQuery({ id });
  const recommend = recommendData?.slice(0, 4);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className="detail-page">
      <MovieDetailInfo movie={movie} id={id} />
      <MovieReview id={id} recommend={recommend} />
    </div>
  );
};

export default MovieDetailPage;
