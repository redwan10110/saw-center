import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Pages/Shared/Navigation";
import Footer from "./Pages/Shared/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Purchase from "./Pages/Purchase/Purchase";
import RequireAuth from "./Pages/Login/RequireAuth";
import Blog from "./Pages/Blog/Blog";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Portfolio from "./Pages/Portfolio/Portfolio";
import { ToastContainer } from "react-toastify";
import AddReview from "./Pages/Dashboard/AddReview";
import MyOrder from "./Pages/Dashboard/MyOrder";
import MyProfile from "./Pages/Dashboard/MyProfile";
import "react-toastify/dist/ReactToastify.css";
import AllUser from "./Pages/Dashboard/AllUser";
import RequireAdmin from "./Pages/Dashboard/RequireAdmin";
import AllOrder from "./Pages/Dashboard/AllOrder";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import Payment from "./Pages/Dashboard/Payment";
function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="blog" element={<Blog></Blog>} />
        <Route
          path="purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route
            path="all-user"
            element={
              <RequireAdmin>
                <AllUser></AllUser>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="add-product"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="all-order"
            element={
              <RequireAdmin>
                <AllOrder></AllOrder>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manage-products"
            element={
              <RequireAdmin>
                <ManageProduct></ManageProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="my-order" element={<MyOrder></MyOrder>}></Route>
          <Route path="my-profile" element={<MyProfile></MyProfile>}></Route>
          {/* <Route path="all-user" element={<AllUser></AllUser>}></Route> */}
        </Route>

        <Route path="portfolio" element={<Portfolio></Portfolio>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="register" element={<Register></Register>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
