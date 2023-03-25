import React from "react";
import { addToDb } from "../../utilities/fakedb";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;

  const addToCart = (id) => {
    addToDb(id);
  };

  const addToCartWithParam = () => addToCart(id);

  return (
    <div className="product">
      <h2>Buy this:{name} </h2>
      <p>Only for: {price}</p>
      <p>
        <small>It has id: {id}</small>
      </p>
      <button onClick={addToCartWithParam}>Add to cart</button>
      <button onClick={() => addToCart(id)}>Add to cart: Shortcut</button>
    </div>
  );
};

export default Cosmetic;
