import { SEARCH } from "../../constants";
import { imagePath } from "../../util";
import Link from "next/link";
import Image from "next/image";
import styles from "./results.module.css";

export default function SearchQuery({ content }) {
  return (
    <div>
      {content.map((content) => (
        <Link href={`/${SEARCH.MOVIES}/${content.id}`}>
            <div className={styles.container}>
              <div className={styles.title} key={`content-${content.id}`}>
                <Image
                  src={imagePath(content.poster_path)}
                  width={100}
                  height={150}
                />
                <p>{content.original_title}</p>
              </div>
              <div className={styles.description}>
                <p> {content.overview}</p>
              </div>
            </div>
        </Link>
      ))}
    </div>
  );
}
