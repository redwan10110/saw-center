import React, { useState } from "react";

import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";

const AllOrder = () => {
  //   const [order, setOrder] = useState([]);
  //   const [user, loading, error] = useAuthState(auth);
  const [deleteOrder, setDeleteOrder] = useState(null);
  //   const navigate = useNavigate();

  const {
    data: allOrder,
    isLoading,
    refetch,
  } = useQuery("allOrder", () =>
    fetch(`https://saw-center.herokuapp.com/all-orders`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleShipped = (id) => {
    // console.log(id);
    fetch(`http://localhost:5000/order-shipped/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h1 className="text-5xl text-secondary my-5 text-center">
        Total Order: {allOrder.length}
      </h1>

      <div className="px-6 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="table w-full text-left">
          <thead>
            <tr>
              <th>User Email</th>
              <th>Product Name</th>
              <th>Total Price</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allOrder.map((a) => (
              <tr key={a._id}>
                <td>{a.customerEmail}</td>
                <td>{a.orderName}</td>
                <td className="font-bold">${a.totalPrice}</td>
                <td className="font-bold">
                  {a.payment && !a.shipped && `Paid And Pending`}
                  {!a.payment && `Unpaid`}
                  {a.shipped && `Shipped`}
                </td>
                <td>
                  {!a.payment && (
                    <>
                      <label
                        onClick={() => setDeleteOrder(a)}
                        htmlFor="delete-confirm-modal"
                        className="btn btn-xs btn-warning "
                      >
                        Delete
                      </label>
                    </>
                  )}
                  {a.payment && (
                    <>
                      <button
                        className="btn btn-xs btn-success"
                        onClick={() => handleShipped(a._id)}
                      >
                        Update
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {deleteOrder && (
        <DeleteConfirmModal
          deleteOrder={deleteOrder}
          refetch={refetch}
          setDeleteOrder={setDeleteOrder}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default AllOrder;
