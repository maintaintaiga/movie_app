export async function getMovies() {
  const apiUrl = process.env.NEXT_PUBLIC_TMDB_API_URL || "";
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY || "";
  const res = await fetch(
    `${apiUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`
  );
  return res.json();
}

export async function getSimilarMovies(genreId) {
  const apiUrl = process.env.NEXT_PUBLIC_TMDB_API_URL || "";
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY || "";
  const res = await fetch(
    `${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=${genreId}`
  );
  return res.json();
}

export async function getMovie(id) {
  const apiUrl = process.env.NEXT_PUBLIC_TMDB_API_URL || "";
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY || "";
  const res = await fetch(
    `${apiUrl}/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=credits,release_dates`
  );
  return res.json();
}
