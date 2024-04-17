"use client";
import { useState, useEffect } from "react";

import styles from "@/css/page.module.css";
import { getMovies } from "@/app/data/data";
import MovieItem from "@/components/home/item";

export default function Page() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    try {
      getMovies().then((data) => {
        setMovies(data.results);
      });
    } catch (err) {
      console.log(err);
      setMovies([]);
    }
  }, []);

  //I'm using index as key for now as the order won't be changing.
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {movies != null && movies.length > 0
          ? movies.map((movie, index) => (
              <MovieItem movie={movie} key={index} />
            ))
          : null}
      </div>
    </main>
  );
}
