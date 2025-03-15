import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">SocialApp</Link>
        <div>
          <Link to="/login" className="mr-4">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
};
