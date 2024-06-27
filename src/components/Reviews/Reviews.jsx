import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./Reviews.module.scss";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const apiKey = "d45c591dd3ef2fb9c22b9964b5ee2547";

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`,
        );
        setReviews(response.data.results);
      } catch (error) {
        console.error("Error fetching reviews", error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div className={styles.container}>
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews found.</p>
      ) : (
        <ul className={styles.reviewList}>
          {reviews.map((review) => (
            <li key={review.id} className={styles.reviewItem}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
