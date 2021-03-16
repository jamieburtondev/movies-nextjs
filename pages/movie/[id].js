import { SEARCH, CREW } from "../../constants";
import {
  getById,
  getCredits,
  getVideos,
  getReleaseDates,
  getMovieImage,
} from "../../util";
import Image from "next/image";
import Link from "next/link";
import Crew from '../../components/crew';

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
  const cast = credits.cast.slice(0, 4);
  const crew = {};

  const crewPositions = Object.values(CREW);
  crewPositions.forEach(position => crew[position] = []);

  credits.crew.forEach((member) => {
    if (crewPositions.includes(member.job)) {
      crew[member.job] = crew[member.job]
        ? crew[member.job].concat([{ name: member.name, id: member.id }])
        : [{ name: member.name, id: member.id }];
    }
  });

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
