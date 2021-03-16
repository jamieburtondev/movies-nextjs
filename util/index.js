export const searchPage = ({ type, query }) => `/${type}?search=${query}`;

const getJson = async (link) => {
  const data = await fetch(link);
  return await data.json();
};

export const searchMovieDb = async ({ type, query }) =>
  await getJson(
    `https://api.themoviedb.org/3/search/${type}?api_key=${process.env.API_KEY}&query=${query}`
  );

export const getById = async ({ type, id }) =>
  await getJson(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.API_KEY}`
  );

export const getCredits = async ({ type, id }) =>
  await getJson(
    `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${process.env.API_KEY}`
  );

export const getVideos = async ({ type, id }) =>
  await getJson(
    `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.API_KEY}`
  );

export const getReleaseDates = async ({ type, id }) =>
  await getJson(
    `https://api.themoviedb.org/3/${type}/${id}/release_dates?api_key=${process.env.API_KEY}`
  );

export const getNowPlaying = async () =>
  await getJson(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}`
  );

export const getUpcoming = async () =>
  await getJson(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`
  );

export const getPerson = async ({ id }) =>
  await getJson(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.API_KEY}`
  );

export const getPersonCredits = async ({ id }) =>
  await getJson(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.API_KEY}`
  );

export const getPersonImages = async ({ id }) =>
  await getJson(
    `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.API_KEY}`
  );

export const getMovieImage = (image) =>
  `https://image.tmdb.org/t/p/w500/${image}`;
