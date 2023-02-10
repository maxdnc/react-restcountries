import { useState } from "react";

import "../styles/search.scss";

export default function Search({ onSubmit }) {
  const [searchText, setSearchText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        onSubmit(searchText);
        e.preventDefault();
      }}
      autoComplete="off"
      className="search"
    >
      <label hidden htmlFor="country-search">
        Search for a country
      </label>
      <div className="search__wrapper">
        <input
          value={searchText}
          className="search__wrapper__input"
          type="search"
          id="country-search"
          name="search"
          placeholder="Search for a country..."
          required
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          id="searched"
          aria-labelledby="Search"
          className="search__wrapper__button"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </form>
  );
}
