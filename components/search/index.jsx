import React, { useState } from "react";
import { SEARCH } from "../../constants";
import { searchPage } from "../../util";
import Link from "next/link";
import styles from "./search.module.css";

export default function Search() {
  const [type, setType] = useState(SEARCH.MOVIES);
  const [query, setQuery] = useState("");

  return (
    <div className={styles.search}>
      <Link href="/">
        <a className={styles.home}> Home </a>
      </Link>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <select
          className={styles.select}
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value={SEARCH.MOVIES}> Movies </option>
          <option value={SEARCH.PERSON}> Person </option>
        </select>
        <input
          className={styles.input}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
        />

        <Link href={searchPage({ type, query })}>
          <button type="submit" className={styles.button}>
            Search
          </button>
        </Link>
      </form>
    </div>
  );
}
