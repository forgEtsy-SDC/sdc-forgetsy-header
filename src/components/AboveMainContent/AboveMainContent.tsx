import axios from "axios";
import React from "react";
import { match } from "react-router-dom";
import { APIENDPOINT } from "../../Const";
import { ApiResults } from "../../interfaces/apiResultTypes";
import UpperLeftThird from "../UpperLeftThird/UpperLeftThird";
import style from "./AboveMainContent.module.css";

interface PropTypes {
  match: match<{ productId: string }>;
}

interface State {
  searchInput: string;
  searchResults: ApiResults[];
  selectedProduct: ApiResults | null;
}

class AboveMainContent extends React.Component<PropTypes, State> {
  private CancelToken = axios.CancelToken;
  private source = this.CancelToken.source();

  constructor(props: any) {
    super(props);
    this.state = {
      searchInput: "",
      searchResults: [],
      selectedProduct: null
    };
  }

  public componentDidMount() {
    // this.getProducts();
  }

  public componentWillUnmount() {
    // this.source.cancel("cancelled on unmount");
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
        <div className={style.upperRightThird}></div>
        <div className={style.BottomThird}></div>
      </header>
    );
  }

  private async getProducts() {
    const productId = this.props.match.params.productId;
    try {
      const results = await axios.get(`${APIENDPOINT}/product/${productId}`, {
        cancelToken: this.source.token
      });

      const selectedProductsIndex = 0;
      const selectedProduct: ApiResults = results.data[selectedProductsIndex];

      this.setState({ selectedProduct });
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
