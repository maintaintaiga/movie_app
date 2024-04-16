"use client";
import { useEffect, useState } from "react";

import styles from "../css/similarMovies.module.css";
import MovieItem from "./movieItem";
import { getSimilarMovies } from "@/app/data/data";
import tmdbLoader from "@/app/tmdb-image-loader";
import Image from "next/image";

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
              <Image
                key={movie.id}
                src={movie.poster_path}
                loader={tmdbLoader}
                height={270}
                width={180}
                alt="Click to see detail"
                className={styles.image}
              />
            ))
          : null}
      </div>
    </div>
  );
}
