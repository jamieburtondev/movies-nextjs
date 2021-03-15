import React, { useState } from "react";
import { SEARCH } from "../../constants";
import { searchPage } from "../../util";
import Link from "next/link";
import styles from './search.module.css';

const Search = () => {
  const [type, setType] = useState(SEARCH.MOVIES);
  const [query, setQuery] = useState("");

  return (
    <div>
      <h2> Search for Movies </h2>

      <form className={styles.form} onSubmit={(e) => e.preventDefault() }>
        <input className={styles.input} onChange={(e) => setQuery(e.target.value)} type="text" />
        <select className={styles.select} value={type} onChange={(e) => setType(e.target.value)}>
          <option value={SEARCH.MOVIES}> Movies </option>
          <option value={SEARCH.TV}> Television </option>
          <option value={SEARCH.PERSON}> Person </option>
        </select>

        <Link href={searchPage({ type, query })}><button type="submit" className={styles.button}>Search</button></Link>
      </form>
    </div>
  );
};

export default Search;
