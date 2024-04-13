import React from "react";
import "./FilterSection.style.css";
import GenreFilter from "./GenreFilter";

const FilterSection = ({ sideOpen, genreId, setGenreId, year, setYear }) => {
  return (
    <div className={`filter-style ${sideOpen ? "open" : "close"}`}>
      <GenreFilter genreId={genreId} setGenreId={setGenreId} />
    </div>
  );
};

export default FilterSection;
