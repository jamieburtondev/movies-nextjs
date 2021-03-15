import Image from "next/image";
import Link from "next/link";
import { imagePath } from "../../util";
import { SEARCH } from "../../constants";
import styles from "./list.module.css";

const List = ({ title, movies }) => {
  return (
    <div>
      <h2> {title} </h2>
      <div className={styles.list}>
        {movies.map((movie) => (
          <div className={styles.item} key={`${title}-movie-${movie.id}`}>
            <Link href={`/${SEARCH.MOVIES}/${movie.id}`}>
              <a>
                <Image
                  src={imagePath(movie.poster_path)}
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

export default List;
