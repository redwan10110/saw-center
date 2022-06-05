import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, des, minOrder, stock, price, img } = product;
    const navigate = useNavigate();
  const handleBuyNow = (_id) =>{
    navigate(`/purchase/${_id}`);
  }
  return (
    <div className="card w-90 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="saw" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <p>{des}</p>

        <p className="font-bold">Unit Price : ${price}</p>
        <p className="font-bold">Min Order: {minOrder}</p>
        <p className="font-bold">Stock Available: {stock}</p>

        <div className="card-actions">
          <button className="btn btn-primary" onClick={()=>handleBuyNow(_id)}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
