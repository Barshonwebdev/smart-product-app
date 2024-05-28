import { Link } from "react-router-dom";

const SingleProduct = ({product,isDashboard}) => {
    const{id,photo_url,name,price,availability,brand,description}=product;
  return (
    <div>
      <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
        <figure className="px-5 pt-5">
          <img
            src={photo_url}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className=" items-center p-5">
          <h2 className="card-title">{name}</h2>
          <h2 className="">Brand: {brand}</h2>
          <p>Price: ${price}</p>
          <p>Available: {availability}</p>
          <p className="my-2">{description}</p>
          <div className="card-actions flex justify-between mt-5">
            <Link to={`/productdetails/${id}`}><button className="btn btn-primary">Details</button></Link>
            {
              isDashboard && <div className="space-x-5">
              <button className="btn btn-warning">Edit</button>
              <button className="btn btn-error">Delete</button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
