import React, { useState } from "react";
import "./MovieDetailInfo.style.css";
import { Modal } from "react-bootstrap";
import { useMovieTrailerQuery } from "../../../../hooks/useMovieTrailer";
import YouTube from "react-youtube";

const MovieDetailInfo = ({ movie, id }) => {
  const [show, setShow] = useState(false);
  const { data: video } = useMovieTrailerQuery({ id });
  const prices = (price) => {
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
    },
  };

  return (
    <section className="movie-info">
      <article className="movie-img">
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          className=""
          alt="poster"
        />
      </article>
      <article className="movie-txt">
        <ul className="movie-genres">
          {movie?.genres.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        <p className="movie-title">{movie?.title}</p>
        <p className="movie-movie">{movie?.movie}</p>
        <p className="movie-overview">{movie?.overview}</p>
        <ul className="movie-text-arera">
          <li>
            <span>Budget</span>$ {prices(movie?.budget)}
          </li>
          <li>
            <span>Release date</span>
            {movie?.release_date}
          </li>
          <li>
            <span>Running time</span>
            {movie?.runtime}min
          </li>
          <li>
            <div className="btn-trailer" onClick={() => setShow(true)}>
              <span>Watch Trailer</span>
            </div>
          </li>
        </ul>
      </article>
      <Modal
        show={show}
        centered={true}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        contentClassName="modal-style"
      >
        <Modal.Header closeVariant="white" closeButton />
        <Modal.Body>
          <YouTube
            videoId={video && video[0]?.key}
            opts={opts}
            style={{ height: "100%" }}
            onReady={(event) => event.target.mute()}
          />
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default MovieDetailInfo;
