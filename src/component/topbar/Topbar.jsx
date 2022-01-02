import React from "react";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <>
        <div className="logo">
          <h4>Blood</h4>
        </div>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>Why give Blood</li>
            <li>Our Services</li>
            <li>Contact Us</li>
            <li>About</li>
          </ul>
        </div>
      </>
    </div>
  );
}
