import { SEARCH } from "../../constants";
import { searchMovieDb, imagePath } from "../../util";
import Link from "next/link";
import Image from "next/image";

export default function SearchQuery(props) {
  const { movies } = props;

  return (
    <div>
      {movies.map((movie) => (
        <div key={`movie-${movie.id}`}>
          <Link href={`/${SEARCH.MOVIES}/${movie.id}`}>
            <a>{movie.original_title}</a>
          </Link>
          <Image src={imagePath(movie.poster_path)} width={100} height={100} />
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await searchMovieDb({
    type: SEARCH.MOVIES,
    query: context.query.search,
  });

  const movies = data.results.slice(0, 5);

  return {
    props: {
      movies,
    },
  };
}
