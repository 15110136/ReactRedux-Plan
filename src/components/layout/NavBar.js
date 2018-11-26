import React from 'react';
import { Link } from "react-router-dom";
import SignedInLink from './SignedInLink';
import SignedOutLinks from './SignedOutLink';
const NavBar=()=>{
  return(
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">
          Kai'Sa Plan
        </Link>
        <SignedInLink/>
        <SignedOutLinks/>
      </div>
    </nav>
  );
}

export default NavBar;
