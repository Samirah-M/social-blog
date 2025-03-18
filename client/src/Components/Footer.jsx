import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logoImage from "../assets/imgs/logo.png"; // assuming the logo image is in the imgs folder

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img
            src={logoImage}
            alt="Stock Sage Logo"
            onClick={() => (window.location.href = "/")}
          />
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <Link to="/qa">Q&A</Link>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
        <div className="footer-info">
          <p>&copy; 2025 Stock Sage</p>
          <p>
            "The stock market is filled with individuals who know the price of
            everything, but the value of nothing.” – Philip Fisher
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
