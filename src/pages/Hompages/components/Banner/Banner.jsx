import React from "react";
import "./Banner.style.css";
import { usePopulerMoviceQuery } from "../../../../hooks/usePopulerMovice";
import Alert from "react-bootstrap/Alert";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopulerMoviceQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  const firstMovie = data?.results ? data.results[0] : null;
  const firstImgPath = firstMovie?.poster_path
    ? `https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${firstMovie.poster_path}`
    : "";
  return (
    <div
      style={{
        backgroundImage: `url(${firstImgPath})`,
      }}
      className="banner"
    >
      <div className="banner-txt-area">
        <h1>{data?.results[0].title}</h1>
        <p>{data?.results[0].overview}</p>
      </div>
    </div>
  );
};

export default Banner;
