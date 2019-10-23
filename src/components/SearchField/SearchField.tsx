import React from "react";
import { ApiResults } from "../../interfaces/apiResultTypes";
import SearchResults from "../SearchResults/SearchResults";
import style from "./SearchField.module.css";

interface PropTypes {
  getProductsBySearch: (query: string) => Promise<void>;
  searchResults: ApiResults[];
}

interface State {
  searchInput: string;
  resultsVisible: boolean;
}

export default class SearchField extends React.Component<PropTypes, State> {
  constructor(props: PropTypes) {
    super(props);
    this.state = {
      searchInput: "",
      resultsVisible: false
    };
    this.onChange = this.onChange.bind(this);
    this.displayResults = this.displayResults.bind(this);
    this.hideResults = this.hideResults.bind(this);
  }

  public componentDidUpdate(prevProps: PropTypes, prevState: State) {
    if (this.state.searchInput !== prevState.searchInput) {
      console.log(this.state.searchInput);
    }
  }

  public render() {
    return (
      <div className={style.searchFieldContainer}>
        <form
          onFocus={this.displayResults}
          onBlur={this.hideResults}
          className={style.inputDiv}
        >
          <input
            onChange={this.onChange}
            type="text"
            className={style.input}
            id="search-box"
            placeholder="Search for items or shops"
            name="search_box"
            value={this.state.searchInput}
          ></input>
        </form>
        <div className={style.buttonDiv}>
          <button type="submit" className={style.inputButton}>
            Search
          </button>
        </div>
        {this.state.resultsVisible && (
          <SearchResults searchResults={this.props.searchResults} />
        )}
      </div>
    );
  }

  private displayResults() {
    this.setState({ resultsVisible: true });
  }

  private hideResults() {
    this.setState({ resultsVisible: false });
  }

  private onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const searchInput = e.currentTarget.value;
    this.setState({ searchInput });
  }
}
