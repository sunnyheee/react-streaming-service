import React, { useState, useEffect } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Alert, Col, Container, Row } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import "./MoviesPage.style.css";

const MoviesPage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(5);
  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });

  useEffect(() => {
    const handleResize = () => {
      const mobileWidth = 640;
      setPageRangeDisplayed(window.innerWidth < mobileWidth ? 3 : 5);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          필터
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, i) => (
              <Col key={i} lg={4} xs={12} className="movie-card">
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            pageCount={data?.total_pages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={pageRangeDisplayed}
            onPageChange={handlePageClick}
            containerClassName="pagination"
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviesPage;
