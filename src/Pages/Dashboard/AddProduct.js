import React from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const product = {
      name: e.target.name.value,
      des: e.target.des.value,
      img: e.target.img.value,
      minOrder:e.target.minOrder.value,
      stock:e.target.stock.value,
      price:e.target.price.value,

    };
    console.log(product);

    await fetch("https://saw-center.herokuapp.com/product", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(`Product Added`);
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
          onSubmit={handleAddProduct}
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
            min="5"
            name="minOrder"
            placeholder="Give minOrder >5"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock number"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
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

export default AddProduct;
