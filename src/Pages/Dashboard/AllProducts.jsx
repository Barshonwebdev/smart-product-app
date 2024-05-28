import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleProduct from "../../components/Products/SingleProduct";

const AllProducts = () => {
  const products = useLoaderData();
  return (
    <div>
      <div>
        <h1 className="text-center my-5 text-2xl text-gray-500"> All products</h1>
      </div>
      <div className="flex flex-wrap gap-10">
        {
            products.map(product=><SingleProduct product={product} key={product.id}></SingleProduct>)
        }
      </div>
    </div>
  );
};

export default AllProducts;
