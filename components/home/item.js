"use client";
import Image from "next/image";
import Link from "next/link";

import tmdbLoader from "@/app/tmdb-image-loader";
import styles from "@/css/movieItem.module.css";
import ScoreItem from "../scoreItem";

export default function MovieItem({ movie, imageWidth, imageHeight }) {
  const { id, title, poster_path, vote_average } = movie;
  const width = imageWidth || 200;
  const height = imageHeight || 300;
  return (
    <div className={styles.movieContainer}>
      <Link href={`/${id}`}>
        <Image
          className={styles.image}
          src={poster_path}
          loader={tmdbLoader}
          height={height}
          width={width}
          alt="Click to see detail"
        />
      </Link>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <ScoreItem score={vote_average} />
      </div>
    </div>
  );
}
