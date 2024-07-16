import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, NavLink } from "react-router-dom";
import "../App.css";

function Navbar() {
  useGSAP(() => {
    gsap.from(".left img", {
      y: -40,
      opacity: 0,
      duration: 1,
    });

    gsap.from(".left nav ul li", {
      y: -40,
      opacity: 0,
      stagger: 0.4,
      duration: 0.5,
    });

    gsap.from(".navbar .right img", {
      y: -40,
      opacity: 0,
      stagger: 0.4,
      duration: 1,
    });
  });
  return (
    <>
      <div className="navbar container">
        <div className="left">
          <Link to="/">
            <img src="../Images/logo.png" alt="Logo" />
          </Link>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "white",
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "white",
                  })}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/wallpaper"
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "white",
                  })}
                >
                  Wallpapers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gameplay"
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "white",
                  })}
                >
                  Gameplays
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right">
          <Link to="/" className="icon">
            <img src="/Images/actvision_.png" alt="Activision" />
            <img src="/Images/playstation.png" alt="Playstation" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
