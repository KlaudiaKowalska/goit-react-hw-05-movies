import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieList.module.scss";

const MovieList = ({ movies }) => (
  <ul className={styles.movieList}>
    {movies.map((movie) => (
      <li key={movie.id} className={styles.movieItem}>
        <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
          {movie.title}
        </Link>
      </li>
    ))}
  </ul>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieList;
