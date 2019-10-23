import React from "react";
import { ApiResults } from "../../interfaces/apiResultTypes";
import style from "./SearchResult.module.css";

interface PropTypes {
  title: ApiResults["title"];
}

const SearchResult: React.FunctionComponent<PropTypes> = ({ title }) => {
  return <li className={style.searchResult}>{title}</li>;
};

export default SearchResult;
