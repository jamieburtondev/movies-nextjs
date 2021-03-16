import { SEARCH } from "../../constants";
import { getMovieImage } from "../../util";
import Link from "next/link";
import Image from "next/image";
import styles from "./results.module.css";

export default function SearchQuery({ content }) {
  return (
    <div>
      {content.map((content) => (
        <div className={styles.container} key={`content-${content.id}`}>
          <div className={styles.title}>
            <Image
              src={getMovieImage(content.poster_path)}
              width={100}
              height={150}
            />
            <Link href={`/${SEARCH.MOVIES}/${content.id}`}><a>{content.original_title}</a></Link>
          </div>
          <div className={styles.description}>
            <p> {content.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
