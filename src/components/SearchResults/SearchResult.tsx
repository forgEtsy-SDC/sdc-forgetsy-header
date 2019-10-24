import unescape from "lodash.unescape";
import React from "react";
import { Link } from "react-router-dom";
import { ApiResults } from "../../interfaces/apiResultTypes";
import style from "./SearchResult.module.css";

interface PropTypes {
  index: number;
  title: ApiResults["title"];
  listingId: ApiResults["listing_id"];
  handleRedirect: (status: boolean) => void;
}

const SearchResult: React.FunctionComponent<PropTypes> = (props) => {
  return (
    <Link
      onClick={() => props.handleRedirect(true)}
      className={style.searchResultLink}
      to={`/${props.listingId}`}
    >
      <li tabIndex={props.index} className={style.searchResult}>
        {unescape(props.title)}
      </li>
    </Link>
  );
};

export default SearchResult;
