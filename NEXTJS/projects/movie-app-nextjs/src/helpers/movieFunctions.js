const API_KEY = process.env.TMDB_KEY;
const BASE_URL = process.env.TMDB_BASE_URL;

export const getMovies = async (type) => {
  try {
    const res = await fetch(`${BASE_URL}${type}?api_key=${API_KEY}`); // force: catch (default)

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const { results } = await res.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};

export const getVideoKey = async (movieId) => {
  try {
    const res = await fetch(`${BASE_URL}${movieId}/videos?api_key=${API_KEY}`); // force: catch (default)

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const { results } = await res.json();
    return results[0]?.key;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const res = await fetch(`${BASE_URL}${movieId}?api_key=${API_KEY}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const movie = await res.json();
    return movie;
  } catch (error) {
    console.log(error);
  }
};
