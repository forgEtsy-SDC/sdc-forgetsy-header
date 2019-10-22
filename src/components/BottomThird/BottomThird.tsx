import React from "react";
import style from "./BottomThird.module.css";

interface State {
  searchInput: string;
}

const BottomThird: React.FunctionComponent<{}> = () => {
  return (
    <div className={style.bottomThird}>
      <div className={style.fakeLink}>Jewelry & Accessories</div>
      <div className={style.fakeLink}>Clothing & Shoes</div>
      <div className={style.fakeLink}>Home & Living</div>
      <div className={style.fakeLink}>Wedding & Party</div>
      <div className={style.fakeLink}>Toys & Entertainment</div>
      <div className={style.fakeLink}>Art & Collectibles</div>
      <div className={style.fakeLink}>Craft Supplies</div>
      <div className={style.fakeLink}>Vintage</div>
      <div className={style.fakeLink}>Gifts</div>
    </div>
  );
};

export default BottomThird;
