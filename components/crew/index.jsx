import React from "react";
import { CREW } from "../../constants";
import Link from "next/link";

export default function Crew({ crew }) {
  return (
    <div>
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
          <div>
            <h2> {position}</h2>
            {crew[position].map((member) => (
              <p>
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
