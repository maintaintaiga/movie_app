"use client";
import { useEffect, useState } from "react";

import styles from "../css/similarMovies.module.css";
import { getSimilarMovies } from "@/app/data/data";
import tmdbLoader from "@/app/tmdb-image-loader";
import Image from "next/image";
import ScoreItem from "./scoreItem";

export default function SimilarMovies({ id, genre }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (genre) {
      try {
        getSimilarMovies(genre.id).then((data) => {
          setMovies(data.results.slice(0, 15));
        });
      } catch (err) {
        console.log(err);
        setMovies([]);
      }
    }
  }, [id]);

  return (
    <div className={styles.container}>
      <p>More {genre.name} Movies</p>
      <div className={styles.scrollContainer}>
        {movies != null && movies.length > 0
          ? movies.map((movie) => (
              <div style={{ minWidth: 180 }}>
                <Image
                  key={movie.id}
                  src={movie.poster_path}
                  loader={tmdbLoader}
                  height={270}
                  width={180}
                  alt="Click to see detail"
                  className={styles.image}
                />
                <h2>{movie.title}</h2>
                <ScoreItem score={movie.vote_average} isLarge />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
