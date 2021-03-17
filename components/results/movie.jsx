import { SEARCH } from "../../constants";
import { getMovieImage } from "../../util";
import Link from "next/link";
import Image from "next/image";
import styles from "./results.module.css";

export default function Movie({ movie }) {
  return (
    <div className={styles.container} key={`movie-${movie.id}`}>
      <div className={styles.title}>
        <Image
          src={getMovieImage(movie.poster_path)}
          width={100}
          height={150}
        />
        <Link href={`/${SEARCH.MOVIES}/${movie.id}`}>
          <a>{movie.original_title}</a>
        </Link>
      </div>
      <div className={styles.description}>
        <p> {movie.overview}</p>
      </div>
    </div>
  );
}
