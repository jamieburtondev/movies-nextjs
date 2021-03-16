import { SEARCH } from "../../constants";
import { searchMovieDb, getMovieImage } from "../../util";
import Link from "next/link";
import Image from "next/image";
import Results from '../../components/results';

export default function SearchQuery({ movies }) {
  return (
    <Results content={movies} />
  );
}

export async function getServerSideProps(context) {
  const data = await searchMovieDb({
    type: SEARCH.MOVIES,
    query: context.query.search,
  });

  const movies = data.results.length ? data.results.slice(0, 5) : [];

  return {
    props: {
      movies,
    },
  };
}
