import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Searchbar = function ({ placeholder, onSearchSubmit }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(input);
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder={placeholder}
            aria-label="Search"
            onChange={handleChange}
            value={input}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Searchbar;
