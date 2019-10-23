import React from "react";
import { ApiResults } from "../../interfaces/apiResultTypes";
import SearchField from "../SearchField/SearchField";
import style from "./UpperLeftThird.module.css";

interface State {
  searchInput: string;
}

interface PropTypes {
  getProductsBySearch: (query: string) => Promise<void>;
  initialResults: ApiResults[];
  searchResults: ApiResults[];
}

export default class UpperLeftThird extends React.Component<PropTypes, State> {
  public render() {
    return (
      <div className={style.upperLeftThird}>
        <h1 className={style.logo}>forgEtsy</h1>
        <SearchField
          getProductsBySearch={this.props.getProductsBySearch}
          searchResults={this.props.searchResults}
          initialResults={this.props.initialResults}
        />
      </div>
    );
  }
}
