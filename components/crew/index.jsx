import { Fragment } from "react";
import { CREW } from "../../constants";
import Link from "next/link";
import styles from './crew.module.css';

export default function Crew({ crew, cast, actor }) {
  return (
    <Fragment>
      <h3 className={styles.title}> Crew </h3>
      {actor && (
        <div>
          <h4> Acting </h4>
          {cast.map((movie) => (
            <div key={`movie-cast-${movie.id}`}>
              <p>{movie.character} in <Link href={`/movie/${movie.id}`}><a>{movie.title}</a></Link></p>
            </div>
          ))}
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
            <h4> {position}</h4>
            {crew[position].map((member) => (
              <p key={`movie-crew-${member.id}`}>
                {member.title && (
                  <Link href={`/movie/${member.id}`}>
                    <a>{member.title}</a>
                  </Link>
                )}
                {member.name && (
                  <Link href={`/person/${member.id}`}>
                    <a>{member.name}</a>
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
