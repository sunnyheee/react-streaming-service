import React, { useState, useEffect } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Alert, Col, Container, Row } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import "./MoviesPage.style.css";
import SideBar from "./components/Sidebar";

const MoviesPage = () => {
  const [query] = useSearchParams();
  const [page, setPage] = useState(1);
  const [sortValue, setSortValue] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [genreId, setGenreId] = useState([]);
  const keyword = query.get("q");

  const {
    data: movieList,
    isLoading,
    isError,
    error,
  } = useSearchMovieQuery({
    keyword,
    page,
  });

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  const sortMovies = (movies) => {
    const sortMap = {
      "Popularity(Asc)": (a, b) => a.popularity - b.popularity,
      "Release Day(Desc)": (a, b) => Number(b.release_date.replace(/-/g, "")) - Number(a.release_date.replace(/-/g, "")),
      "Release Day(Asc)": (a, b) => Number(a.release_date.replace(/-/g, "")) - Number(b.release_date.replace(/-/g, "")),
      "Vote(Desc)": (a, b) => b.vote_average - a.vote_average,
      "Vote(Asc)": (a, b) => a.vote_average - b.vote_average,
      "": (a, b) => b.popularity - a.popularity, // Default sorting by popularity
    };

    const sortFunction = sortMap[sortValue] || sortMap[""];
    return [...movies].sort(sortFunction);
  };

  useEffect(() => {
    if (movieList) {
      // 필터링 및 정렬 처리
      let filtered = movieList.results.filter((item) =>
        genreId.every((i) => item.genre_ids.includes(i))
      );
      setFilteredMovies(sortMovies(filtered));
    }
  }, [sortValue, movieList, genreId]);

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
          <SideBar
            title="Sort"
            sortValue={sortValue}
            setSortValue={setSortValue}
          />
          <SideBar title="Filter" genreId={genreId} setGenreId={setGenreId} />
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {filteredMovies.map((movie, index) => (
              <Col key={index} lg={6} xs={12}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={Math.min(movieList.total_pages, 500)}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination justify-content-center mb-5"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviesPage;
