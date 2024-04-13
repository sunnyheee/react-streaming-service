import React from "react";
import Alert from "react-bootstrap/Alert";
import "./MovieReview.style.css";
import MovieReviewCard from "./MovieReviewCard";
import { useMovieReviewQuery } from "../../../../hooks/useMovieReview";
import MovieRecommend from "../MovieRecommend/MovieRecommend";

const MovieReview = ({ id, recommend }) => {
  const {
    data: review,
    isLoading,
    isError,
    error,
  } = useMovieReviewQuery({ id });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <article className="review-area">
      <h2>Recommend</h2>
      <div className="recommend-box">
        <MovieRecommend recommend={recommend} />
      </div>
      <h2>Review</h2>
      {review?.map((review, index) => (
        <MovieReviewCard review={review} key={index} />
      ))}
    </article>
  );
};

export default MovieReview;
