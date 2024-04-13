import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./SortSection.style.css";

const sortArr = [
  "Popularity(Desc)",
  "Popularity(Asc)",
  "Release Day(Desc)",
  "Release Day(Asc)",
  "Vote(Desc)",
  "Vote(Asc)",
];

const SortSection = ({ sideOpen, sortValue, setSortValue }) => {
  return (
    <article className={`sort-filter ${sideOpen ? "open" : "close"}`}>
      <div className="sort-filter-area">
        <h6>Sort Results By</h6>
        <DropdownButton
          title={`${sortValue ? sortValue : "Sort By"}`}
          onSelect={(event) => setSortValue(event)}
        >
          {sortArr.map((item, index) => (
            <Dropdown.Item eventKey={item} key={index}>
              {item}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    </article>
  );
};

export default SortSection;
