import React from "react";
import { useMovieGenreQuery } from "../../../hooks/useMovieGenre";
import { Badge, Row, Col } from "react-bootstrap";
import "./GenreFilter.style.css";

const GenreFilter = ({ genreId, setGenreId }) => {
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
        {genreData?.map((item, index) => (
          <Col key={index} lg={6} className="my-2">
            <Badge
              bg="primary"
              className="genre-filter-button"
              onClick={(event) => toggleGenreSelection(event, item.id)}
            >
              {item.name}
            </Badge>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default GenreFilter;
