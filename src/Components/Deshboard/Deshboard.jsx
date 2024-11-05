import React from "react";
import { Link, Outlet } from "react-router-dom";

const Deshboard = () => {
  return (
    <div>
     <div className="bg-[#9538E2] max-w-full h-[300px] text-center">
        <div>
            <h1 className="text-5xl text-white p-10">Deshboard</h1>
            <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to<br/> the coolest accessories, we have it all!</p>
        </div>
     <div className="w-[200px] mx-auto mt-10 mbb-10">
        <div role="tablist" className="tabs tabs-boxed">
          <Link to={"cart"} role="tab" className="tab">
            Cart
          </Link>
          <Link to={"whishlist"} role="tab" className="tab tab-active">
            WishList
          </Link>
        </div>
      </div>
     
     </div>
     <Outlet></Outlet>
    </div>
  );
};

export default Deshboard;
