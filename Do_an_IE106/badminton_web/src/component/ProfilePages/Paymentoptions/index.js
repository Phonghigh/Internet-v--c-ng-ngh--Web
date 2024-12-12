import React from "react";
import "./style.scss";
import { formatter } from "../../../utils/formatter";

const PaymentOptions = () => {
  return (
    <div className="payment-options">
      <h2>Payment Options</h2>
      <div className="cards">
        <div className="card">
          <p>Visa</p>
          <h3>{formatter(15000000)}</h3>
          <p>**** **** **** 3814</p>
          <button>Delete Card</button>
        </div>
        <div className="card">
          <p>Gift Card</p>
          <h3>{formatter(100000)}</h3>
          <p>**** **** **** 7761</p>
          <button>Delete Card</button>
        </div>
      </div>
      <button className="add-card">Add Card</button>
    </div>
  );
};

export default PaymentOptions;
