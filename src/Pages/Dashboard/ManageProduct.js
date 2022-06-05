import React, { useState } from "react";

import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ProductDeleteConfirmModal from "./ProductDeleteConfirmModal";

const ManageProduct = () => {
  //   const [order, setOrder] = useState([]);
  //   const [user, loading, error] = useAuthState(auth);
  const [deleteProduct, setDeleteProduct] = useState(null);
  //   const navigate = useNavigate();

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch(`https://saw-center.herokuapp.com/products`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-5xl text-secondary my-5 text-center">
        Total Product: {products.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((a) => (
              <tr key={a._id}>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded">
                      <img src={a.img} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                  </div>
                </td>
                <td>{a.name}</td>
                <td>{a.price}</td>
                <td>
                  <>
                    <label
                      onClick={() => setDeleteProduct(a)}
                      htmlFor="delete-confirm-modal"
                      className="btn btn-xs btn-danger ml-3"
                    >
                      Delete
                    </label>
                  </>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {deleteProduct && (
        <ProductDeleteConfirmModal
        deleteProduct={deleteProduct}
          refetch={refetch}
          setDeleteProduct={setDeleteProduct}
        ></ProductDeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageProduct;
