import { Fragment } from 'react';
import Image from "next/image";
import Link from "next/link";
import { getMovieImage } from "../../util";
import { SEARCH } from "../../constants";
import styles from "./list.module.css";

export default function List({ title, movies }) {
  return (
    <Fragment>
      <h2 className={styles.heading}> {title} </h2>
      <div className={styles.list}>
        {movies.map((movie) => (
          <div className={styles.item} key={`${title}-movie-${movie.id}`}>
            <Link href={`/${SEARCH.MOVIES}/${movie.id}`}>
              <a className={styles.link}>
                <div className={styles.poster}>
                  <Image
                    src={getMovieImage(movie.poster_path)}
                    width={150}
                    height={200}
                  />
                </div>
                <p className={styles.title}>{movie.title}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
