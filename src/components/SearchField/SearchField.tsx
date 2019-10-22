import React from "react";
import style from "./SearchField.module.css";

export default class SearchField extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={style.fieldDiv}>
        <div className={style.inputDiv}>
          <input
            type="text"
            className={style.input}
            id="search-box"
            placeholder="Search for items or shops"
            name="search_box"
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
}
