import React from "react";

const ReviewCard = ({ review }) => {
    const {name, img, rating, des} = review;
    const arr = Array.from({length: rating}, (_, index) => index + 1);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={img} alt="n"/>
          </div>
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{des}</p>
        <div>
        {
            arr.map((a,i) => <i key={i} className="fa-solid fa-star text-primary"></i>)
        }
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
