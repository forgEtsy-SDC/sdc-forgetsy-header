import React from "react";
import style from "./UpperRightThird.module.css";

interface State {
  searchInput: string;
}

const UpperRightThird: React.FunctionComponent<{}> = () => {
  return (
    <div className={style.upperRightThird}>
      <div className={style.fakeLink}>Sell on forgEtsy</div>
      <div className={style.fakeLink}>Register</div>
      <button className={style.signIn}>Sign In</button>
      <div className={style.discover}>
        <span>Discover</span>
      </div>
      <div className={style.cart}>Cart</div>
    </div>
  );
};

export default UpperRightThird;
