import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./Home.module.scss";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = "d45c591dd3ef2fb9c22b9964b5ee2547";

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`,
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching trending movies", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
