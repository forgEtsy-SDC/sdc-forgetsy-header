import React from "react";
import SearchField from "../SearchField/SearchField";
import style from "./UpperLeftThird.module.css";

interface State {
  searchInput: string;
}

export default class UpperLeftThird extends React.Component<{}, State> {
  constructor(props: any) {
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
        <SearchField />
      </div>
    );
  }
}
