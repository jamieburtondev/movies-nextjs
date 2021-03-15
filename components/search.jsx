import React, { useState } from "react";
import { SEARCH } from "../constants";
import { searchPage } from "../util";
import Link from "next/link";

const Search = () => {
  const [type, setType] = useState(SEARCH.MOVIES);
  const [query, setQuery] = useState("");

  return (
    <div>
      <h1> Search for Movies </h1>

      <input onChange={(e) => setQuery(e.target.value)} type="text" />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value={SEARCH.MOVIES}> Movies </option>
        <option value={SEARCH.TV}> Television </option>
        <option value={SEARCH.PERSON}> Person </option>
      </select>

      {type && query && <Link href={searchPage({ type, query })}>Search</Link>}
    </div>
  );
};

export default Search;
