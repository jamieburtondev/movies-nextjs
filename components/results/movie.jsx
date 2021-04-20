import { SEARCH } from "../../constants";
import { getMovieImage } from "../../util";
import Link from "next/link";
import Image from "next/image";
import styles from "./results.module.css";

export default function Movie({ movie }) {
  return (
    <div className={styles.container} key={`movie-${movie.id}`}>
      <div className={styles.poster}>
        <Link href={`/${SEARCH.MOVIES}/${movie.id}`}>
          <a>
            <Image
              src={getMovieImage(movie.poster_path)}
              width={100}
              height={200}
            />
          </a>
        </Link>
      </div>
      <div className={styles.description}>
        <h2 className={styles.title}>
          <Link href={`/${SEARCH.MOVIES}/${movie.id}`}>
            <a>{movie.original_title}</a>
          </Link>
        </h2>
        <p> {movie.overview}</p>
      </div>
    </div>
  );
}
