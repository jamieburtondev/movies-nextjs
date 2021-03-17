import { SEARCH } from "../../constants";
import { getMovieImage } from "../../util";
import Link from "next/link";
import Image from "next/image";
import styles from "./results.module.css";

export default function Person({ person }) {
  console.log(`person`, person);
  return (
    <div className={styles.container} key={`person-${person.id}`}>
      <div className={styles.title}>
        <Image
          src={getMovieImage(person.profile_path)}
          width={100}
          height={150}
        />
        <Link href={`/${SEARCH.PERSON}/${person.id}`}>
          <a>{person.name}</a>
        </Link>
      </div>
      <div className={styles.description}>
        <p> Known for {person.known_for_department} </p>
        {person.known_for.map((production) => {
          if (production.media_type === "movie") {
            return (
              <Link href={`movie/${production.id}`}>
                <a>
                  <p>{production.title}</p>
                </a>
              </Link>
            );
          } else {
            return <p> {production.title}</p>;
          }
        })}
      </div>
    </div>
  );
}
