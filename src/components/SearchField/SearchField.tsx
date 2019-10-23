import axios from "axios";
import React from "react";
import style from "./SearchField.module.css";

interface State {
  searchInput: string;
}

export default class SearchField extends React.Component<{}, State> {
  constructor({  }: any) {
    super({});
    this.state = {
      searchInput: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  public componentDidUpdate({}, prevState: State) {
    if (this.state.searchInput !== prevState.searchInput) {
      console.log(this.state.searchInput);
    }
  }

  public render() {
    return (
      <div className={style.fieldDiv}>
        <div className={style.inputDiv}>
          <input
            onChange={this.onChange}
            type="text"
            className={style.input}
            id="search-box"
            placeholder="Search for items or shops"
            name="search_box"
            value={this.state.searchInput}
          ></input>
        </div>
        <div className={style.buttonDiv}>
          <button type="submit" className={style.inputButton}>
            Search
          </button>
        </div>
      </div>
    );
  }

  private onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const searchInput = e.currentTarget.value;
    this.setState({ searchInput });
  }
}
