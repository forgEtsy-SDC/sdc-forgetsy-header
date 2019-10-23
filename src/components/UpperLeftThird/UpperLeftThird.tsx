import React from "react";
import { ApiResults } from "../../interfaces/apiResultTypes";
import SearchField from "../SearchField/SearchField";
import style from "./UpperLeftThird.module.css";

interface State {
  searchInput: string;
}

interface PropTypes {
  getProductsBySearch: (query: string) => Promise<void>;
  searchResults: ApiResults[];
}

export default class UpperLeftThird extends React.Component<PropTypes, State> {
  constructor(props: PropTypes) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  public componentDidMount() {
    // this.getProducts();
  }

  public componentDidUpdate() {
    // stuff
  }

  public render() {
    return (
      <div className={style.upperLeftThird}>
        <h1 className={style.logo}>forgEtsy</h1>
        <SearchField
          getProductsBySearch={this.props.getProductsBySearch}
          searchResults={this.props.searchResults}
        />
      </div>
    );
  }
}
