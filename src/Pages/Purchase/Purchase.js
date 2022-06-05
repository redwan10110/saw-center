import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/firebase.init";
import Loading from "../Shared/Loading";

const Purchase = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [minorderError, setMinOrderError] = useState("");
  const [orderQuantity, setOrderQuantity] = useState(null);
  const {
    data: product,
    isLoading,
    refetch,
  } = useQuery("productsAvailable", () =>
    fetch(`https://saw-center.herokuapp.com/product/${id}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  const { _id, name, des, minOrder, stock, price, img } = product;
  const handleOrder = async (e) => {
    e.preventDefault();
    const order = {
      orderName: name,
      price,
      totalPrice: price * e.target.orderQuantity.value,
      customerEmail: user.email,
      customerName: user.displayName,
      phone: e.target.phone.value,
      address: e.target.address.value,
      payment: false,
      shipped: false
    };
    console.log(order);

    await fetch("https://saw-center.herokuapp.com/order", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(`Order confirmed for ${_id}`);
        } else {
          toast.error(`Order is not confirm`);
        }
      });
  };

  const handleOrderQuantity = (e) => {
    console.log(e);
    setOrderQuantity(e.target.value);
  };

  return (
    <div>
      <h1>Purchase: {id}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-5 lg:px-12 px-6">
        <div>
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
            </div>
          </div>
        </div>
        <div>
          <form
            onSubmit={handleOrder}
            className="grid grid-cols-1 gap-3 justify-items-center mt-3"
          >
            <input
              type="number"
              name="orderQuantity"
              onChange={handleOrderQuantity}
              placeholder={`Minimum order ${minOrder}`}
              className="input input-bordered w-full max-w-xs"
            />
            {!(orderQuantity > minOrder && orderQuantity < stock) && (
              <small className="text-red-500">{`Order should be > ${minOrder} and < ${stock}`}</small>
            )}
            <input
              type="text"
              name="name"
              disabled
              value={user.displayName}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user.email}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="submit"
              value="Place Order"
              disabled={!(orderQuantity > minOrder && orderQuantity < stock)}
              className="btn btn-primary w-full max-w-xs text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
