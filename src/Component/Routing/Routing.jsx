import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "../home/Home";
import SignUp from "./../Auth/SignUp/SignUp";
import Cart from "../Cart/Cart";
import CheckOut from "./../CheckOut/CheckOut";
import Contact from "./../Contact/Contact";
import Error from "./../Error/Error";
import MailSucess from "../MailSuccess/MailSucess";
import MyAccount from "./../My Account/MyAccount";
import ShopDetail from "./../ShopDetails/ShopDetail";
import ShopWithSideBar from "../ShopWithSideBar/ShopWithSideBar";
import ShopWithoutSidebar from "./../ShopWithoutSidebar/ShopWithoutSidebar";
import SignIn from "./../Auth/SignIn/SignIn";
import Wishlist from "./../WishList/Wishlist";
import BlogDetails from "./../BlogDetails/BlogDetails";
import BlogDetailsWithSidebar from "./../BlogDetailWithSideBar/BlogDetailsWithSidebar";
import BlogGrid from "./../BlogGrid/BlogGrid";
import BlogGridWithSidebar from "./../BlogGridWithSidebar/BlogGridWithSidebar";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} /> PROBLEM
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
      <Route path="/mail-success" element={<MailSucess />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/shop-details" element={<ShopDetail />} />
      <Route path="shop-with-sidebar" element={<ShopWithSideBar />} />
      <Route
        path="shop-without-sidebar"
        element={<ShopWithoutSidebar />}
      />{" "}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/blogs/blog-details" element={<BlogDetails />} />
      <Route
        path="/blogs/blog-details-with-sidebar"
        element={<BlogDetailsWithSidebar />}
      />
      <Route path="/blogs/blog-grid" element={<BlogGrid />} />
      <Route
        path="/blogs/blog-grid-with-sidebar"
        element={<BlogGridWithSidebar />}
      />
    </Routes>
  );
};

export default Routing;
