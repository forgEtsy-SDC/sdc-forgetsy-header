import React from "react";
import { ApiResults } from "../../interfaces/apiResultTypes";
import SearchResult from "./SearchResult";
import style from "./SearchResults.module.css";

interface PropTypes {
  searchResults: ApiResults[];
}

const SearchResults: React.FunctionComponent<PropTypes> = (props) => {
  return (
    <div className={style.searchResultsContainer}>
      <ul className={style.searchResultsList}>
        <li className={style.popularItems}>
          <strong>Popular right now</strong>
        </li>
        {props.searchResults.map((result) => {
          return <SearchResult key={result.listing_id} title={result.title} />;
        })}
      </ul>
    </div>
  );
};

export default SearchResults;
