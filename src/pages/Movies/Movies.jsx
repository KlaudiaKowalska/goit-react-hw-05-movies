import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./Movies.module.scss";
import MovieList from "../../components/MovieList/MovieList";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = "d45c591dd3ef2fb9c22b9964b5ee2547";

  return (
    <div className={styles.container}>
      <h1>Search Movies</h1>
      <SearchBar apiKey={apiKey} setMovies={setMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
