"use client";
import Image from "next/image";

import styles from "@/css/movieItem.module.css";
import { getVote } from "@/utils/getVotePercentage";

export default function ScoreItem({ score, isLarge }) {
  const vote = getVote(score);
  return (
    <div className={styles.rating}>
      <Image
        src={`/static/images/star.png`}
        alt="star icon"
        width={16}
        height={16}
      />
      <p className={isLarge ? styles.ratingLarge : styles.ratingValue}>
        {vote}%
      </p>
    </div>
  );
}
