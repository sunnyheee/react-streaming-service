import React from "react";
import { useMovieGenreQuery } from "../../../hooks/useMovieGenre";
import { Badge, Row, Col } from "react-bootstrap";
import "./GenreFilter.style.css";

const GenreFilter = ({ genreId, setGenreId }) => {
  const { data: genreData } = useMovieGenreQuery();
  const selectedGenres = (event, id) => {
    if (event.target.classList.contains("active")) {
      event.target.classList.remove("active");
      const list = genreId.filter((i) => i !== id);
      setGenreId(list);
    } else {
      event.target.classList.add("active");
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
              onClick={(event) => selectedGenres(event, item.id)}
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
