import React, { useState } from "react";
import "./SideBar.style.css";
import SortSection from "./SortSection";
import FilterSection from "./FilterSection";

const SideBar = ({ title, sortValue, setSortValue, genreId, setGenreId }) => {
  const [sideOpen, setSideOpen] = useState(false);
  return (
    <article>
      <div className="sidebar-area">
        <div className="side-title" onClick={() => setSideOpen(!sideOpen)}>
          <h5>{title}</h5>
        </div>
        <div>
          {title === "Sort" ? (
            <SortSection
              sideOpen={sideOpen}
              sortValue={sortValue}
              setSortValue={setSortValue}
            />
          ) : (
            <FilterSection
              sideOpen={sideOpen}
              genreId={genreId}
              setGenreId={setGenreId}
            />
          )}
        </div>
      </div>
    </article>
  );
};

export default SideBar;
