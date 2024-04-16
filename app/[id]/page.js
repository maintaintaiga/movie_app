"use client";
import { useEffect, useState } from "react";

import MovieDetail from "@/components/movieDetail";
import styles from "@/css/detailPage.module.css";
import { getMovie } from "@/app/data/data";

export default function Page({ params }) {
  const { id } = params;

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (id) {
      try {
        getMovie(id).then((data) => {
          setMovie(data);
        });
      } catch (err) {
        console.log(err);
        setMovie(null);
      }
    }
  }, [id]);

  return movie != null ? (
    <main className={styles.container}>
      <MovieDetail movie={movie} />
    </main>
  ) : null;
}
