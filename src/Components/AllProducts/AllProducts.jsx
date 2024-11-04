import React from "react";
import { useLoaderData } from "react-router-dom";
import AllProduct from "./AllProduct/AllProduct";

const AllProducts = () => {
  const allData = useLoaderData();
  console.log(allData);
  return (
    <div className="container mx-auto flex">
      <div
        id="category"
        className="w-1/10 bg-white rounded-md h-auto flex flex-col p-10 gap-5 "
      >
        <button className="btn">All Products</button>
        <button className="btn">Laptops</button>
        <button className="btn">Phones</button>
        <button className="btn">Accessories</button>
        <button className="btn">Smart Watches</button>
        <button className="btn">MacBook</button>
        <button className="btn">Iphone</button>
      </div>
      <div id="card" className="w-9/10 bg-white grid grid-cols-3 gap-5 p-10 rounded-md">
        {allData.map((item) => (
          <AllProduct key={allData.id} item={item}></AllProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
