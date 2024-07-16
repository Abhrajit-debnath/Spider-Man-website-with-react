import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import "../App.css";

function Layout() {
  return (
    <>
     <div className="container">
      <Navbar />
      <Outlet />
      </div>
    </>
  );
}

export default Layout;
