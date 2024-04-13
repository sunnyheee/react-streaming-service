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
  const [data, setData] = useState(null);
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
    setSortValue("");
    setGenreId([]);
  };

  const sortMovie = () => {
    let sortedData;
    switch (sortValue) {
      case "Popularity(Asc)":
        sortedData = [...data.results].sort(
          (a, b) => a.popularity - b.popularity
        );
        setData({ ...data, results: sortedData });
        return;
      case "Release Day(Desc)":
        sortedData = [...data.results].sort(
          (a, b) =>
            Number(b.release_date.split("-").join("")) -
            Number(a.release_date.split("-").join(""))
        );
        setData({ ...data, results: sortedData });
        return;
      case "Release Day(Asc)":
        sortedData = [...data.results].sort(
          (a, b) =>
            Number(a.release_date.split("-").join("")) -
            Number(b.release_date.split("-").join(""))
        );
        setData({ ...data, results: sortedData });
        return;
      case "Vote(Desc)":
        sortedData = [...data.results].sort(
          (a, b) => b.vote_average - a.vote_average
        );
        setData({ ...data, results: sortedData });
        return;
      case "Vote(Asc)":
        sortedData = [...data.results].sort(
          (a, b) => a.vote_average - b.vote_average
        );
        setData({ ...data, results: sortedData });
        return;
      default:
        sortedData = [...data.results].sort(
          (a, b) => b.popularity - a.popularity
        );
        setData({ ...data, results: sortedData });
        return;
    }
  };

  useEffect(() => {
    if (sortValue !== "") {
      sortMovie();
    } else if (movieList) {
      setData(movieList);
    }
  }, [sortValue, movieList]);

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
            {data?.results
              .filter((item) =>
                genreId.every((i) => item.genre_ids.includes(i))
              )
              .map((movie, index) => (
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
            pageCount={data?.total_pages > 500 ? 500 : data?.total_pages}
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
