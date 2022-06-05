import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Link, Outlet } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* <!-- Page content here --> */}
        <h2 className="text-5xl text-purple-500 my-5 text-center">Welcome to DashBoard</h2>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">Hello</Link>
          </li>
          {!admin && (
            <>
              <li>
                <Link to="/dashboard/review">Add Review</Link>
              </li>
              <li>
                <Link to="/dashboard/my-order">My Order</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/dashboard/my-profile">My Profile</Link>
          </li>

          {admin && (
            <>
              <li>
                <Link to="/dashboard/all-user">All user</Link>
              </li>
              <li>
                <Link to="/dashboard/all-order">Manage All Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/add-product">Add A Product</Link>
              </li>
              <li>
                <Link to="/dashboard/manage-products">Manage Products</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
