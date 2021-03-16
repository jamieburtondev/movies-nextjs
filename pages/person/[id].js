import {
  getPerson,
  getPersonCredits,
  getPersonImages,
  getMovieImage,
} from "../../util";
import Image from "next/image";
import Crew from '../../components/crew';
import { CREW } from "../../constants";

export default function Person({ person, credits, image, crew }) {
  return (
    <div>
      <h1> {person.name}</h1>
      {image.file_path && (
        <Image
          src={getMovieImage(image.file_path.replace("/", ""))}
          width={100}
          height={150}
        />
      )}
      <p> Birth: {person.birthday} </p>
      <p> Death: {person.deathday} </p>
      <p> Biography: {person.biography} </p>

      <Crew crew={crew} />
    </div>
  );
}

// /rNeVepRRxqvJ8nuubK7MksG1l55.jpg

export async function getServerSideProps({ params }) {
  const { id } = params;
  const person = await getPerson({ id });
  const images = await getPersonImages({ id });
  const credits = await getPersonCredits({ id });

  const image = images.profiles.length ? images.profiles[0] : {};

  //   DUPLICATE OF MOVIE [id]
  const crew = {};
  const crewPositions = Object.values(CREW);
  crewPositions.forEach((position) => (crew[position] = []));

  credits.crew.forEach((member) => {
    //   NAME REMOVED
    if (crewPositions.includes(member.job)) {
      crew[member.job] = crew[member.job]
        ? crew[member.job].concat([{ title: member.title, id: member.id }])
        : [{ title: member.title, id: member.id }];
    }
  });

  return {
    props: {
      person,
      image,
      credits,
      crew
    },
  };
}
