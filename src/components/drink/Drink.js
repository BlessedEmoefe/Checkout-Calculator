import React, { useState, useCallback } from "react";
import "./Drink.css";

const Drink = ({ name, price, onOrder }) => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
    onOrder(price);
  }, [onOrder, price]);

  return (
    <button id={name} className="buttonContainer" onClick={handleClick}>
      <span className="buttonName">{name}</span>
      <span className="buttonPrice">{price} yen</span>
      <div className="count">{count}</div>
    </button>
  );
};

export default Drink;
