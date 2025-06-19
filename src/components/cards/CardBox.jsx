import React from "react";
import CartImg from "../../assets/student-img.png";

function CartBox() {
  return (
    <>
      <div className="col-md-3">
        <div className="cartBox">
          <img src={CartImg} alt="" />
          <div className="cardContent">
            <h3>Percentile vs Marks JEE Main</h3>
            <p>Year Wise</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartBox;
