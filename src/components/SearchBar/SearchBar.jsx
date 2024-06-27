import React, { useState } from "react";
import axios from "axios";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ apiKey, setMovies }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error searching for movies", error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch} className={styles.form}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
