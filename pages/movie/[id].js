import { SEARCH } from "../../constants";
import {
  getById,
  getCredits,
  getVideos,
  getReleaseDates,
  getMovieImage,
  getPositions
} from "../../util";
import Image from "next/image";
import Link from "next/link";
import Crew from '../../components/crew';
import Cast from '../../components/cast';

export default function SearchMovie({
  result,
  crew,
  cast,
  videos,
  releaseDates,
}) {
  return (
    <div>
      <h1> {result.title} </h1>
      <Image src={getMovieImage(result.poster_path)} width={100} height={100} />
      <p>{result.overview}</p>
      <Cast cast={cast} />
      <Crew crew={crew} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const result = await getById({
    type: SEARCH.MOVIES,
    id,
  });

  const credits = await getCredits({ type: SEARCH.MOVIES, id });
  const crew = getPositions({ credits });
  const cast = credits.cast.slice(0, 4);
  const videos = await getVideos({ type: SEARCH.MOVIES, id });
  const releaseDates = await getReleaseDates({ type: SEARCH.MOVIES, id });

  return {
    props: {
      result,
      credits,
      cast,
      crew,
      videos,
      releaseDates,
    },
  };
}
