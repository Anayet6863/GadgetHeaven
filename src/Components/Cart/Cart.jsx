import React, { useContext, useState } from "react";
import { allDataContext, cartContext } from "../Root/Root";
import CartShow from "../CartShow/CartShow";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const allData = useContext(allDataContext);
  console.log(allData);
  const product = useContext(cartContext);
  console.log(product);
  const { products } = product;

  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Cart</h1>
        <div className="flex gap-5">
          <button className="btn">Total:</button>
          <button className="btn btn-secondary">Sort By Price</button>
          <button className="btn btn-primary">Purchase</button>
        </div>
      </div>

      <div className="container mx-auto bg-white rounded-lg">
        {products.map((item, idx) => (
          <CartShow key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
