import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
