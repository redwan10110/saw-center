import React from "react";

const BusinessSummury = () => {
  return (
    <div>
      <h1 className="text-center text-4xl text-secondary my-10 font-bold">
        Business Summary
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-5 lg:px-12 px-6">
        <div className="card w-70 bg-primary text-primary-content">
          <div className="card-body">
          <i className="fa-solid fa-truck text-3xl font-bold text-center"></i>
            <h2 className="font-bold text-5xl text-center">20+</h2>
            <p className="font-bold text-center">Counties</p>
          </div>
        </div>
        <div className="card w-70 bg-primary text-primary-content">
          <div className="card-body">
          <i className="fa-solid fa-dollar-sign text-3xl font-bold text-center"></i>
            <h2 className="font-bold text-5xl text-center">2M+ </h2>
            <p className="font-bold text-center">Annual revenue</p>
          </div>
        </div>
        <div className="card w-70 bg-primary text-primary-content">
          <div className="card-body">
          <i className="fa-solid fa-comment-dots text-3xl font-bold text-center"></i>
            <h2 className="font-bold text-5xl text-center">500+</h2>
            <p className="font-bold text-center">Reviews</p>
          </div>
        </div>
        <div className="card w-70 bg-primary text-primary-content">
          <div className="card-body">
          <i className="fa-solid fa-cart-flatbed-suitcase text-3xl font-bold text-center"></i>
            <h2 className="font-bold text-5xl text-center">10+</h2>
            <p className="font-bold text-center">Products</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BusinessSummury;
