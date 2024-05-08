import React from "react";
import { useMovieGenreQuery } from "../../../hooks/useMovieGenre";
import { Badge, Row, Col } from "react-bootstrap";
import "./GenreFilter.style.css";

const GenreFilter = ({ genreId, setGenreId }) => {
  // Fetch the genre data
  const { data: genreData } = useMovieGenreQuery();

  // Check if a genre is currently active
  const isActiveGenre = (id) => genreId.includes(id);

  // Toggle genre selection
  const toggleGenreSelection = (id) => {
    if (isActiveGenre(id)) {
      // Remove the genre if already selected
      setGenreId(genreId.filter((genre) => genre !== id));
    } else {
      // Add the genre if not already selected
      setGenreId([...genreId, id]);
    }
  };

  return (
    <div className="genre-filter-area">
      <h6>Genres</h6>
      <Row className="m-3">
        {genreData?.map((genre) => {
          // Check if the current genre is selected
          const isSelected = isActiveGenre(genre.id);
          return (
            <Col key={genre.id} lg={6} className="my-2">
              <Badge
                bg={isSelected ? "secondary" : "primary"}
                className={`genre-filter-button ${isSelected ? "active" : ""}`}
                aria-pressed={isSelected}
                onClick={() => toggleGenreSelection(genre.id)}
              >
                {genre.name}
              </Badge>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default GenreFilter;
