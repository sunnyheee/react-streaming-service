import React from "react";
import Banner from "./components/Banner/Banner";
import TopRatedMovieSlide from "./components/TopRatedMovieSlide/TopRatedMovieSlide";
import UpcommingMovieSlide from "./components/UpcommingMovieSlide/UpcommingMovieSlide";
import PopularMovieSilde from "./components/PopularMovieSilde/PopularMovieSilde";

const HompagesPage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSilde />
      <TopRatedMovieSlide />
      <UpcommingMovieSlide />
    </div>
  );
};

export default HompagesPage;
