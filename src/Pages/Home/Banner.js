import React from "react";
import bg2 from '../../pic/bg-2.jpeg'
import bg from '../../pic/banner.jpg'

const Banner = () => {
  return (
    <div  className="lg:px-12 px-6">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bg}
            className="lg:w-6/12 rounded-lg shadow-2xl "
            alt="banner-img"
          />
          <div >
            <h1 className="text-5xl font-bold"> <span className="text-primary">Welcome</span>  to leading manufacturing company</h1>
            <p className="py-6">
            Our Company has consistently embraced innovation to provide a superior level of excellence for our customers. 
            </p>
            <button className="btn btn-primary text-white font-bold uppercase ">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
