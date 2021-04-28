import { getMovieImage } from "../../util";
import Image from "next/image";
import Link from "next/link";
import styles from "./cast.module.css";

export default function Cast({ cast }) {
  return (
    <div className={styles.cast}>
      <h3 className={styles.title}> Cast </h3>
      <div className={styles.list}>
        {cast.map((member) => (
          <div className={styles.element} key={`cast-${member.id}`}>
            <Image
              className={styles.image}
              height={150}
              width={100}
              src={getMovieImage(member.profile_path)}
            />
              <Link href={`/person/${member.id}`}>
                <a className={styles.actor}>{member.name}</a>
              </Link>
            <p className={styles.character}> {member.character} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
