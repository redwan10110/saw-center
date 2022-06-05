import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch,index }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://saw-center.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make and admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount> 0) {
          refetch();
          toast.success("Successfully made an admin");
        }
      });
  };
  return (
    <tr>
      <th>{index+1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button className="btn btn-xs" onClick={makeAdmin}>
            Make Admin
          </button>
        )}
        {role === "admin" && (
          <button className="btn btn-xs" disabled>
            Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
