import { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/posts" onClick={() => setIsOpen(false)}>
              All Posts
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setIsOpen(false)}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/sign-up" onClick={() => setIsOpen(false)}>
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/new-post" onClick={() => setIsOpen(false)}>
              New Post
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
