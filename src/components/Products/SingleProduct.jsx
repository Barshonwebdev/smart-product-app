import React from "react";

const SingleProduct = ({product}) => {
    const{photo_url,name,price,availability}=product;
  return (
    <div>
      <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={photo_url}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <p>Available: {availability}</p>
          <div className="card-actions lg:space-x-32 mt-3">
            <button className="btn btn-primary">Details</button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;