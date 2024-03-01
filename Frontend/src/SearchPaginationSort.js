// SearchPaginationSort.js

import React from "react";
import { Form } from "react-bootstrap";

function SearchPaginationSort({
  searchTerm,
  setSearchTerm,
  sortOption,
  setSortOption,
}) {
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-pagination-sort">
      <Form.Group>
        <Form.Control
          className="search-pagination"
          type="text"
          placeholder="Enter Name or  Location to Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Form.Group>
      <Form.Group className="sort-dropdown">
        <Form.Label className="form-label">Sort by:</Form.Label>
        <Form.Control
          as="select"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="" defaultValue>
            Select
          </option>
          <option value="date">Date</option>
          <option value="time">Time</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
}

export default SearchPaginationSort;
