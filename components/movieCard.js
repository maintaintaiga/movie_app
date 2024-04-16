"use client";
import Image from "next/image";

import tmdbLoader from "@/app/tmdb-image-loader";
import styles from "@/css/movieCard.module.css";
import MetaContent from "./metaContent";

export default function MovieCard({ movie }) {
  const { title, overview, poster_path, credits } = movie;

  const crewItem = (member) => (
    <div key={member.id} className={styles.crewItem}>
      <h3 className={styles.jobTitle}>{member.job.toUpperCase()}</h3>
      <p className={styles.memberTitle}>{member.name}</p>
    </div>
  );

  const crewArr = credits.crew
    .filter((el) => el.job === "Writer" || el.job === "Director")
    .slice(0, 3)
    .map((el) => crewItem(el));

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={poster_path}
          height={600}
          width={400}
          alt="Poster"
          loader={tmdbLoader}
          className={styles.image}
          sizes={`(max-width: 900px) 300px, (min-width: 900px) 400px`}
        />
      </div>
      <div className={styles.content}>
        <h1>{title}</h1>
        <MetaContent movie={movie} />
        <div className={styles.overviewContainer}>
          <h3 className={styles.overview}>OVERVIEW</h3>
          <p className={styles.overviewText}>{overview}</p>
        </div>
        <div className={styles.teamContainer}>{crewArr}</div>
      </div>
    </div>
  );
}
