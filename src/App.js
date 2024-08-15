import React, { useState, useCallback } from "react";
import Drink from "./components/drink/Drink";
import Total from "./components/total/Total";
import "./App.css";

const App = () => {
  const [totalDrinks, setTotalDrinks] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleOrder = useCallback((price) => {
    setTotalDrinks((prevTotalDrinks) => prevTotalDrinks + 1);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + price);
  }, []);

  const drinks = [
    { name: "coffee", price: 480 },
    { name: "tea", price: 280 },
    { name: "milk", price: 180 },
    { name: "coke", price: 190 },
    { name: "beer", price: 580 },
    // ... other drinks
  ];

  return (
    <div className="appContainer">
      <div className="drinkButtonContainer">
        {drinks.map((drink) => (
          <Drink
            key={drink.name}
            name={drink.name}
            price={drink.price}
            onOrder={handleOrder}
          />
        ))}
      </div>

      <Total totalDrinks={totalDrinks} totalPrice={totalPrice} />
    </div>
  );
};

export default App;
