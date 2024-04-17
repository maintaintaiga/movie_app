"use client";
import Image from "next/image";
import Link from "next/link";

import styles from "@/css/movieDetail.module.css";
import SimilarMovies from "./similar";
import MovieInfo from "./info";

export default function Container({ movie }) {
  const { genres } = movie;
  const genre = genres[0] || null;

  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={styles.button}>
          <Image
            src={"/static/images/chevron-back.png"}
            alt="back icon"
            width={16}
            height={16}
          />
          <p className={styles.buttonText}>BACK TO MOVIES</p>
        </div>
      </Link>
      <MovieInfo movie={movie} />
      <SimilarMovies genre={genre} />
    </div>
  );
}
