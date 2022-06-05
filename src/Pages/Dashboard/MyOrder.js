import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";

const MyOrder = () => {
  //   const [order, setOrder] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const [deleteOrder, setDeleteOrder] = useState(null);
  const navigate = useNavigate();

  const {
    data: order,
    isLoading,
    refetch,
  } = useQuery("order", () =>
    fetch(`https://saw-center.herokuapp.com/orders?customerEmail=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      } else {
        return res.json();
      }
    })
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-5xl text-secondary my-5 text-center">
        My Order: {order.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>User Email</th>
              <th>Product Name</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {order.map((a) => (
              <tr key={a._id}>
                <td>{a.customerEmail}</td>
                <td>{a.orderName}</td>
                <td className="font-bold">${a.totalPrice}</td>
                <td className="font-bold">{a?.payment?(`Payment Id:${a.transactionId}`):(`Unpaid`)}</td>
                <td>
                  {!a.payment && (
                    <>
                      <Link to={`/dashboard/payment/${a._id}`}>
                        <button className="btn btn-xs btn-success">Pay</button>
                      </Link>
                      <label onClick={()=>setDeleteOrder(a)} for="delete-confirm-modal" className="btn btn-xs btn-danger ml-3">
                        Delete
                      </label>
                    </>
                  )}
                  {a.payment && (
                    <span className="text-success font-bold">Paid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {deleteOrder && <DeleteConfirmModal
        deleteOrder={deleteOrder}
        refetch={refetch}
        setDeleteOrder={setDeleteOrder}
        ></DeleteConfirmModal>}
    </div>
  );
};

export default MyOrder;
