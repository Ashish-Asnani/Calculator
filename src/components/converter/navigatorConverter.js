import React from "react";
import { Link } from "react-router-dom";
import './converterNavigation.css';
const NavbarConverter = () => {
  return (
   
    <nav className="nav-wrapper white darken-3">
      <div className=" container ">
        <ul>
          <li  id= 'converterButton'>
            <Link to="/Convertor/Money" className="btn cyan accent-4">
              Money Converter
            </Link>
          </li>
          <li>
            <Link exact to="/Convertor/Length" className="btn cyan accent-4">
              Unit Convertor
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarConverter;
