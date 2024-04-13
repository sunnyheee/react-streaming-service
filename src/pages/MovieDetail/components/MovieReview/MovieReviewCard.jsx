import React, { useState } from "react";
import "./MovieReviewCard.style.css";

const MovieReviewCard = ({ review }) => {
  const [toggle, setToggle] = useState(false);

  const avatar_basic_url = `https://media.themoviedb.org/t/p/w45_and_h45_face`;

  return (
    <section className="review-sec">
      <article className="review-box">
        {review.author_details.avatar_path === null ? (
          <div className="reviewer-img">
            <img
              src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png"
              alt=""
            />
          </div>
        ) : (
          <div className="reviewer-img">
            <img
              src={`${avatar_basic_url}` + review.author_details.avatar_path}
              alt=""
            />
          </div>
        )}
        <h4>{review.author}</h4>
      </article>
      <div className={`review-content ${toggle ? "toggle" : "active"}`}>
        {review.content}
      </div>
      <div className="reviewer-btn-area">
        {review.content.length !== 0 ? (
          <button className="reviewer-btn" onClick={() => setToggle(!toggle)}>
            {review.content.length > 400 && (toggle ? "close" : "more")}
          </button>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default MovieReviewCard;
