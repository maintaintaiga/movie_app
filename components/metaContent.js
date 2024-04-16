"use client";
import ScoreItem from "./scoreItem";
import styles from "@/css/movieCard.module.css";

export default function MetaContent({ movie }) {
  const { vote_average, release_date, release_dates, runtime, genres } = movie;

  const releaseYear = new Date(release_date).getFullYear();

  //to provide accurate location code, should use geolocation with GeoNames api
  const ageRating = release_dates.results.find(
    (result) => result.iso_3166_1 === "GB"
  )?.release_dates[0].certification;

  const genreChip = (genre) => (
    <div key={genre.id} className={styles.chip}>
      <h6 className={styles.genre}>{genre.name.toUpperCase()}</h6>
    </div>
  );

  const genreArr = () => {
    return genres && Array.isArray(genres)
      ? genres.map((el) => genreChip(el))
      : null;
  };

  const prettyRuntime = () => {
    if (runtime) {
      var hours = Math.floor(runtime / 60);
      var remainingMinutes = runtime % 60;
      return hours + "H " + remainingMinutes + "M";
    } else {
      return "0H 0M";
    }
  };

  return (
    <div className={styles.metaContainer}>
      <ScoreItem isLarge score={vote_average} />
      <div className={styles.infoContainer}>
        <div className={styles.ratingContainer}>
          <p className={styles.rating}>{ageRating}</p>
        </div>
        <p>{releaseYear}</p>
        <p>{prettyRuntime()}</p>
      </div>
      <div className={styles.genreContainer}>{genreArr()}</div>
    </div>
  );
}
