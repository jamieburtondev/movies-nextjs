import { SEARCH } from "../../constants";
import { searchMovieDb, getMovieImage } from "../../util";
import Link from "next/link";
import Image from "next/image";
import Results from "../../components/results";

export default function SearchQuery({ people }) {
  return <Results person={true} content={people} />;
}

export async function getServerSideProps(context) {
  const data = await searchMovieDb({
    type: SEARCH.PERSON,
    query: context.query.search,
  });

  const people = data.results.length ? data.results.slice(0, 5) : [];

  return {
    props: {
      people,
    },
  };
}
