import React from "react";
import { EfentsLogo } from "./efents-logo";

export const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <EfentsLogo />
        <ul>
          <li>
            <a>Events</a>
          </li>
          <li>
            <a>Calendar</a>
          </li>
          <li>
            <a>Create Event</a>
          </li>
        </ul>
        <div className="user-area">
          <span>Login</span>
        </div>
      </div>
    </nav>
  );
};
