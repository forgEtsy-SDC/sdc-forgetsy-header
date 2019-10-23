import React from "react";
import CartSvg from "./CartSvg";
import DiscoverSvg from "./DiscoverSvg";
import style from "./UpperRightThird.module.css";

const UpperRightThird: React.FunctionComponent<{}> = () => {
  return (
    <div className={style.upperRightThird}>
      <div className={style.fakeLink}>Sell on forgEtsy</div>
      <div className={style.fakeLinkRegister}>Register</div>
      <button className={style.signIn}>Sign In</button>
      <div className={style.discover}>
        <DiscoverSvg />
        <span>Discover</span>
      </div>
      <div className={style.cart}>
        <CartSvg />
        Cart
      </div>
    </div>
  );
};

export default UpperRightThird;
