import React from "react";
import { Row, Col } from "react-bootstrap";
import MovieCard from "../../../../common/MovieCard/MovieCard";

const MovieRecommend = ({ recommend }) => {
  return (
    <div>
      {recommend.length === 0 ? (
        <Row className="mt-4 px-4">
          <Col>no recommend</Col>
        </Row>
      ) : (
        <Row className="mt-4 related-movie-area">
          {recommend?.map((item, index) => (
            <Col lg={2} xs={6} key={index} className="my-2">
              <MovieCard movie={item} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default MovieRecommend;
