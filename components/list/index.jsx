import Image from "next/image";
import Link from "next/link";
import { getMovieImage } from "../../util";
import { SEARCH } from "../../constants";
import styles from "./list.module.css";

export default function List({ title, movies }) {
  return (
    <div>
      <h2> {title} </h2>
      <div className={styles.list}>
        {movies.map((movie) => (
          <div className={styles.item} key={`${title}-movie-${movie.id}`}>
            <div className={styles.poster}>
              <Image
                src={getMovieImage(movie.poster_path)}
                width={150}
                height={200}
              />
            </div>
            <p className={styles.title}>
              <Link href={`/${SEARCH.MOVIES}/${movie.id}`}>
                <a className={styles.link}>{movie.title}</a>
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
