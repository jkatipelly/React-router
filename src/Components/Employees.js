import React from "react";
import { Link } from "react-router-dom";

export const Employees = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="Search Employees"></input>
      </div>
      <nav>
        <Link to="Permanent">Permanent</Link>
        <Link to="Contract">Contact</Link>
      </nav>
    </>
  );
};
