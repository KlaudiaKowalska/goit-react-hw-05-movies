import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews";
import styles from "./MovieDetails.module.scss";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const apiKey = "d45c591dd3ef2fb9c22b9964b5ee2547";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  const handleShowCast = () => {
    setShowCast(!showCast);
    setShowReviews(false); // Hide reviews when showing cast
  };

  const handleShowReviews = () => {
    setShowReviews(!showReviews);
    setShowCast(false); // Hide cast when showing reviews
  };

  return (
    <div className={styles.container}>
      <div className={styles.movieInfo}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={styles.poster}
        />
        <div className={styles.details}>
          <h1 className={styles.title}>{movie.title}</h1>
          <p className={styles.score}>User Score: {movie.vote_average}</p>
          <p className={styles.overview}>{movie.overview}</p>
          <div className={styles.genres}>
            Genres:
            {movie.genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>
        </div>
      </div>
      <nav>
        <button onClick={handleShowCast} className={styles.link}>
          {showCast ? "Hide Cast" : "Show Cast"}
        </button>
        <button onClick={handleShowReviews} className={styles.link}>
          {showReviews ? "Hide Reviews" : "Show Reviews"}
        </button>
      </nav>
      {showCast && <Cast />}
      {showReviews && <Reviews />}
    </div>
  );
};

export default MovieDetails;
