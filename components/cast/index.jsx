import { getMovieImage } from "../../util";
import Image from "next/image";
import Link from "next/link";
import styles from "./cast.module.css";

export default function Cast({ cast }) {
  return (
    <div>
      <h2> Cast </h2>
      <div className={styles.list}>
        {cast.map((member) => (
          <div className={styles.element} key={`cast-${member.id}`}>
            <Image
              height={150}
              width={100}
              src={getMovieImage(member.profile_path)}
            />
            <p>
              <Link href={`/person/${member.id}`}>
                <a>{member.name}</a>
              </Link>
            </p>
            <p> {member.character} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
