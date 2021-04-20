import {
  getPerson,
  getPersonCredits,
  getMovieImage,
  getPositions,
} from "../../util";
import Image from "next/image";
import Crew from "../../components/crew";
import { CREW } from "../../constants";
import styles from "./person.module.css";

export default function Person({ person, credits, crew, cast }) {
  const actor = person.known_for_department === "Acting";
  return (
    <main>
      <div className={styles.information}>
        <div className={styles.poster}>
          {person.profile_path && (
            <Image
              src={getMovieImage(person.profile_path)}
              width={300}
              height={400}
            />
          )}
        </div>
        <div className={styles.details}>
          <h2> {person.name}</h2>
          <p>
            {person.birthday}
            {person.deathday && ` - ${person.deathday}`}
          </p>
          {person.biography && (
            <div>
              <h3> Biography </h3> <p> {person.biography} </p>
            </div>
          )}
        </div>
      </div>
      <div>
        <Crew crew={crew} cast={cast} actor={actor} />
      </div>
    </main>
  );
}

// /rNeVepRRxqvJ8nuubK7MksG1l55.jpg

export async function getServerSideProps({ params }) {
  const { id } = params;
  const person = await getPerson({ id });
  const credits = await getPersonCredits({ id });
  const cast = credits.cast;
  const crew = getPositions({ credits });

  return {
    props: {
      person,
      credits,
      crew,
      cast,
    },
  };
}
