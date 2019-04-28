import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    

<nav>
<div class="nav-wrapper black">
  <a  class="brand-logo right">CALCULATOR</a>
  <ul id="nav-mobile" class="left hide-on-med-and-down">
  <li>
            <Link exact to="/" className="btn cyan accent-4">
              Basic Calculator
            </Link>
          </li>
          <li>
            <Link to="/Convertor/Money" className="btn cyan accent-4">
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
