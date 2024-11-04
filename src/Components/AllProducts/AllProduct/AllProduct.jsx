import React from 'react';

const AllProduct = ({item}) => {
    const {product_title,product_image,price} = item;
console.log(item);
    return (
        <div>
             <div className="card bg-base-100 w-96 shadow-xl">
          <figure >
            <img
              src={product_image}
              className='h-[200px] p-3'
              alt="Gadgets"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product_title}</h2>
            <h3>Price: {price}</h3>
            <div className="card-actions">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
        </div>
    );
};

export default AllProduct;