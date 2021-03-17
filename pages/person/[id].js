import {
  getPerson,
  getPersonCredits,
  getMovieImage,
  getPositions
} from "../../util";
import Image from "next/image";
import Crew from '../../components/crew';
import { CREW } from "../../constants";

export default function Person({ person, credits, crew, cast }) {
  const actor = person.known_for_department === "Acting";
  return (
    <div>
      <h1> {person.name}</h1>
      {person.profile_path && (
        <Image
          src={getMovieImage(person.profile_path)}
          width={100}
          height={150}
        />
      )}
      <p> Birth: {person.birthday} </p>
      <p> Death: {person.deathday} </p>
      <p> Biography: {person.biography} </p>

      <Crew crew={crew} cast={cast} actor={actor} />
    </div>
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
      cast
    },
  };
}
