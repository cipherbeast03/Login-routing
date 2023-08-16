import React from 'react';
import { NavLink } from 'react-router-dom';
import { isLoggingOut } from '../Actions/index';
import 'nav.css';

const Navbar = () => {
  const handleLogout = () => {
    setTimeout(() => {
      dispatch(isLoggingOut());
      // store.subscribe(() => console.log(store.getState()));
      navigate('/');
    }, 2000);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://www.google.com/recaptcha/about/images/timeline-enterprise@2x.png"
          height="50px"
          width="50px"
        />
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/home" className="navbar-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navbar-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/service" className="navbar-link">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="navbar-link">
            Profile
          </NavLink>
        </li>
        <li>
          <button className="logout" onClick={handleLogout}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/logout-512.png"
              height="25px"
              width="25px"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
