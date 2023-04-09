import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="flex items-center">
      <div className="text-left font-semibold text-3xl">
        <NavLink to="/">CareerHub</NavLink>
      </div>
      <div className="flex gap-3 mx-auto">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/statistics">Statistics</NavLink>
        <NavLink to="/applied_jobs">Applied Jobs</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>
      <div>
        <button type="button" className="btn-primary">
          Star Applying
        </button>
      </div>
    </div>
  );
};

export default Header;
