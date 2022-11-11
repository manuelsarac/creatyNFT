import React, { useEffect, useState, useRef } from "react";
import '../App.css';
import {Link} from 'react-router-dom';

function NavbarEth() {
  return (
    <div className="Navbar">
      <ul className="Link">
        <Link to="/Ethereum">
            <li>Ethereum</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavbarEth;