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
            <Link href={`/${SEARCH.MOVIES}/${movie.id}`}>
              <a>
                <Image
                  src={getMovieImage(movie.poster_path)}
                  width={100}
                  height={150}
                />
                <p> {movie.title} </p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};