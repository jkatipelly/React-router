import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="Search Products"></input>
      </div>

      <nav>
        {/* <Link to="/products/featured">Featured</Link>
        <Link to="/products/new">New</Link> */}

        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet></Outlet>
    </>
  );
};
