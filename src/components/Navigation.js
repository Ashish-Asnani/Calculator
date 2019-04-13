import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper black darken-3">
      <div className=" container ">
        <ul>
          <li>
            <Link exact to="/" className="btn cyan accent-4">
              Basic Calculator
            </Link>
          </li>
          <li>
            <Link exact to="/AdvancedCalculator" className="btn cyan accent-4">
              Advanced Calculator
            </Link>
          </li>
          <li>
            <Link  to="/Convertor" className="btn cyan accent-4">
              Convertor
            </Link>
          </li>
          <li>
            <Link exact to="/LoanCalculator" className="btn cyan accent-4">
              Loan Calculator
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
