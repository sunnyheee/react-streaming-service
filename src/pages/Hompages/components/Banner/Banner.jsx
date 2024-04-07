import React from "react";
import "./Banner.style.css";
import { usePopulerMoviceQuery } from "../../../../hooks/usePopulerMovice";
import Alert from "react-bootstrap/Alert";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopulerMoviceQuery();
  console.log(data, "111");
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  let firstImgpathData = data?.results[0].poster_path;
  let firstImgpath = `https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${firstImgpathData}`;

  return (
    <div
      style={{
        backgroundImage: "url(" + `${firstImgpath}` + ")",
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
