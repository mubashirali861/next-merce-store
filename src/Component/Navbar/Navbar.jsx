import React from "react";
import "./Navbar.css";
import UpperNavbar from "./UpperNavbar";

const Navbar = () => {
  return (
    <header className="fixed-header">
      <UpperNavbar />
    </header>
  );
};

export default Navbar;
