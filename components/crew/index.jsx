import { Fragment } from "react";
import { CREW } from "../../constants";
import Link from "next/link";
import styles from "./crew.module.css";

export default function Crew({ crew, cast, actor }) {
  return (
    <Fragment>
      <h3 className={styles.title}> Crew </h3>
      {actor && (
        <div>
          <h4 className={styles.acting}> Acting </h4>
          {cast.map((movie) => {
            const releaseDate = movie.release_date
              ? movie.release_date.slice(0, 4)
              : '';
            return (
              <div key={`movie-cast-${movie.id}`}>
                <p className={styles.character}>
                  { releaseDate ? `${releaseDate}: ` : ''}
                  {movie.character}
                  {movie.character ? " in " : ""}
                  <Link href={`/movie/${movie.id}`}>
                    <a className={styles.movie}>{movie.title}</a>
                  </Link>
                </p>
              </div>
            );
          })}
        </div>
      )}

      {[
        CREW.DIRECTOR,
        CREW.SCREENPLAY,
        CREW.STORY,
        CREW.EDITOR,
        CREW.PRODUCER,
        CREW.EXECUTIVE_PRODUCER,
      ].map((position) => {
        if (!crew[position].length) return;

        return (
          <div className={styles.position} key={position}>
            <h4 class={styles.heading}> {position}</h4>
            {crew[position].map((member) => (
              <p key={`movie-crew-${member.id}`}>
                {member.title && (
                  <Link href={`/movie/${member.id}`}>
                    <a className={styles.name}>{member.title}</a>
                  </Link>
                )}
                {member.name && (
                  <Link href={`/person/${member.id}`}>
                    <a className={styles.name}>{member.name}</a>
                  </Link>
                )}
              </p>
            ))}
          </div>
        );
      })}
    </Fragment>
  );
}
