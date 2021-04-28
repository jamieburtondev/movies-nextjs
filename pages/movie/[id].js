import { SEARCH } from "../../constants";
import {
  getById,
  getCredits,
  getVideos,
  getReleaseDates,
  getMovieImage,
  getPositions,
} from "../../util";
import Image from "next/image";
import Crew from "../../components/crew";
import Cast from "../../components/cast";
import styles from "./movie.module.css";

export default function SearchMovie({
  result,
  crew,
  cast,
  releaseDates,
}) {
  return (
    <main className={styles.movie}>
      <div className={styles.information}>
        <div className={styles.poster}>
          <Image
            src={getMovieImage(result.poster_path)}
            width={300}
            height={400}
          />
        </div>
        <div className={styles.details}>
          <h2 className={styles.header}> {result.title} </h2>
          <h3 className="hidden"> Overview </h3>
          <p className={styles.overview}>{result.overview}</p>
        </div>
      </div>
      <div>
        <Cast cast={cast} />
        <Crew crew={crew} />
      </div>
    </main>
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
