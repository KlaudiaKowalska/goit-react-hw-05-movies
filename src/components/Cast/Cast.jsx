import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./Cast.module.scss";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const apiKey = "d45c591dd3ef2fb9c22b9964b5ee2547";

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
        );
        setCast(response.data.cast);
      } catch (error) {
        console.error("Error fetching cast", error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div className={styles.container}>
      <h2>Cast</h2>
      <ul className={styles.castList}>
        {cast.map((member) => (
          <li key={member.cast_id} className={styles.castItem}>
            <p>
              {member.name} as {member.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
