import React from "react";
import { toast } from "react-toastify";

const AddReview = () => {
  const handleReview = async (e) => {
    e.preventDefault();
    const review = {
      name: e.target.name.value,
      des: e.target.des.value,
      rating: e.target.rating.value,
      img: e.target.img.value,
    };
    console.log(review);

    await fetch("https://saw-center.herokuapp.com/review", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(`Review Added`);
        } else {
          toast.error(`Not successful`);
        }
      });
  };
  return (
    <div>
      <h1 className="text-5xl text-secondary my-5 text-center">
        Add Review
      </h1>
      <div className="my-10">
        <form
          onSubmit={handleReview}
          className="grid grid-cols-1 gap-3 justify-items-center mt-3"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="img"
            placeholder="Put Image Link"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="number"
            min="1"
            max="5"
            name="rating"
            placeholder="Give rating 1-5"
            className="input input-bordered w-full max-w-xs"
          />
          <textarea
            name="des"
            className="textarea textarea-bordered w-full max-w-xs"
            placeholder="Write here"
          ></textarea>

          <input
            type="submit"
            value="Add Review"
            className="btn btn-primary w-full max-w-xs text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
