import React from "react";
import { CREW } from "../../constants";
import Link from "next/link";

export default function Crew({ crew, cast, actor }) {
  return (
    <div>
      {actor && (
        <div>
          <h2> Acting </h2>
          {cast.map((movie) => (
            <div key={`movie-cast-${movie.id}`}>
              <p><Link href={`/movie/${movie.id}`}><a>{movie.title}</a></Link></p>
              <p> As: {movie.character} </p>
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
          <div key={position}>
            <h2> {position}</h2>
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
    </div>
  );
}
