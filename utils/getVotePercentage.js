export const getVote = (score) => {
  if (score && typeof score === "number") {
    const voteAverage = score;
    const percentageVote = (voteAverage / 10) * 100;
    return percentageVote.toFixed(0);
  } else {
    return 0;
  }
};
