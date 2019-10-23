import React from "react";
import { ApiResults } from "../../interfaces/apiResultTypes";
import SearchResult from "./SearchResult";
import style from "./SearchResults.module.css";

interface PropTypes {
  results: ApiResults[];
  initialOnly: boolean;
  handleRedirect: (status: boolean) => void;
}

const SearchResults: React.FunctionComponent<PropTypes> = (props) => {
  return (
    <div className={style.searchResultsContainer}>
      <ul className={style.searchResultsList}>
        {props.initialOnly && (
          <li className={style.popularItems}>
            <strong>Popular right now</strong>
          </li>
        )}
        {props.results.length < 1 ? (
          <div className={style.searchResult}>No results for this query</div>
        ) : (
          props.results.map((result) => {
            return (
              <SearchResult
                key={result.listing_id}
                listingId={result.listing_id}
                title={result.title}
                handleRedirect={props.handleRedirect}
              />
            );
          })
        )}
      </ul>
    </div>
  );
};

export default SearchResults;
