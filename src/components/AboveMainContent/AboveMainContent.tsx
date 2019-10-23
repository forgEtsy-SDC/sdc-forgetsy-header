import axios from "axios";
import React from "react";
import { match } from "react-router-dom";
import { APIENDPOINT } from "../../Const";
import { ApiResults } from "../../interfaces/apiResultTypes";
import BottomThird from "../BottomThird/BottomThird";
import UpperLeftThird from "../UpperLeftThird/UpperLeftThird";
import UpperRightThird from "../UpperRightThird/UpperRightThird";
import style from "./AboveMainContent.module.css";

interface PropTypes {
  match: match<{ productId: string }>;
}

interface State {
  searchResults: ApiResults[];
  selectedProduct: ApiResults | null;
}

class AboveMainContent extends React.Component<PropTypes, State> {
  private InitialCancelToken = axios.CancelToken;
  private SearchCancelToken = axios.CancelToken;
  private initialSource = this.InitialCancelToken.source();
  private searchSource = this.SearchCancelToken.source();

  constructor(props: any) {
    super(props);
    this.state = {
      searchResults: [],
      selectedProduct: null
    };
    this.getProductsBySearch = this.getProductsBySearch.bind(this);
  }

  public componentDidMount() {
    this.getInitialProducts();
  }

  public componentWillUnmount() {
    this.initialSource.cancel("cancelled on unmount");
    this.searchSource.cancel("cancelled on unmount");
  }

  public componentDidUpdate(prevProps: PropTypes) {
    // if (
    //   prevProps.match.params.productId !== this.props.match.params.productId
    // ) {
    //   this.getProducts();
    // }
  }

  public render() {
    return (
      <header className={style.header}>
        <UpperLeftThird
          getProductsBySearch={this.getProductsBySearch}
          searchResults={this.state.searchResults}
        />
        <UpperRightThird />
        <BottomThird />
      </header>
    );
  }

  private async getInitialProducts() {
    try {
      const results: any = await axios.get(`${APIENDPOINT}/initialproducts`, {
        cancelToken: this.initialSource.token
      });
      const searchResults: ApiResults[] = results.data;
      this.setState({ searchResults });
    } catch (error) {
      if (axios.isCancel(error)) {
        console.error("Request canceled", error.message);
        throw new Error("Cancelled");
      } else {
        console.error(error);
      }
    }
  }

  private async getProductsBySearch(query: string) {
    try {
      const results: any = await axios.get(`${APIENDPOINT}/products/${query}`, {
        cancelToken: this.searchSource.token
      });
      const searchResults: ApiResults[] = results.data;
      this.setState({ searchResults });
    } catch (error) {
      if (axios.isCancel(error)) {
        console.error("Request canceled", error.message);
        throw new Error("Cancelled");
      } else {
        console.error(error);
      }
    }
  }
}

export default AboveMainContent;
