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
  private CancelToken = axios.CancelToken;
  private source = this.CancelToken.source();

  constructor(props: any) {
    super(props);
    this.state = {
      searchResults: [],
      selectedProduct: null
    };
  }

  public componentDidMount() {
    this.getInitialProducts();
  }

  public componentWillUnmount() {
    this.source.cancel("cancelled on unmount");
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
        <UpperLeftThird />
        <UpperRightThird />
        <BottomThird />
      </header>
    );
  }

  private async getInitialProducts() {
    try {
      const results: any = await axios.get(`${APIENDPOINT}/initialproducts`, {
        cancelToken: this.source.token
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
