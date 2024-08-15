import React from "react";
import "./Total.css";

const Total = ({ totalDrinks, totalPrice }) => {
  return (
    <div className="totalContainer">
      <p className="text">Your Bill</p>
      <span className="horizontalLine" />
      <p className="text">Total Drinks: {totalDrinks}</p>
      <p className="text">Total Price: {totalPrice}</p>
    </div>
  );
};

export default Total;
