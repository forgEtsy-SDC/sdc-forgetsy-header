import React from "react";
import { ApiResults } from "../../interfaces/apiResultTypes";
import SearchResults from "../SearchResults/SearchResults";
import style from "./SearchField.module.css";

interface PropTypes {
  getProductsBySearch: (query: string) => Promise<void>;
  initialResults: ApiResults[];
  searchResults: ApiResults[];
}

interface State {
  searchInput: string;
  resultsVisible: boolean;
  redirectInProgress: boolean;
}

export default class SearchField extends React.Component<PropTypes, State> {
  constructor(props: PropTypes) {
    super(props);
    this.state = {
      searchInput: "",
      resultsVisible: false,
      redirectInProgress: true
    };
    this.onChange = this.onChange.bind(this);
    this.displayResults = this.displayResults.bind(this);
    this.hideResults = this.hideResults.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  public componentDidUpdate(prevProps: PropTypes, prevState: State) {
    if (this.state.searchInput !== prevState.searchInput) {
      this.props.getProductsBySearch(this.state.searchInput);
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
          <SearchResults
            results={
              this.state.searchInput
                ? this.props.searchResults
                : this.props.initialResults
            }
            initialOnly={this.state.searchInput ? false : true}
            handleRedirect={this.handleRedirect}
          />
        )}
      </div>
    );
  }

  private displayResults() {
    this.setState({ resultsVisible: true });
  }

  private hideResults() {
    const delayms = 150;
    if (this.state.redirectInProgress) {
      setTimeout(() => {
        this.setState({ resultsVisible: false });
      }, delayms);
    } else {
      this.setState({ resultsVisible: false });
    }
  }

  private handleRedirect(status: boolean) {
    this.setState({ redirectInProgress: status });
  }

  private onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const searchInput = e.currentTarget.value;
    this.setState({ searchInput });
  }
}
