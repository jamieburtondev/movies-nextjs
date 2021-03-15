export const searchPage = ({ type, query }) => `/${type}?search=${query}`;

export const searchMovieDb = async ({ type, query }) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/${type}?api_key=${process.env.API_KEY}&query=${query}`
  );
  const json = await data.json();
  return json;
};

export const searchById = async ({ type, id }) => {
    const data = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.API_KEY}`);
    const json = await data.json();
    return json;
}
  

export const imagePath = (image) => `https://image.tmdb.org/t/p/w500/${image}`;
