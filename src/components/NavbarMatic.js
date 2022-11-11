import React, { useEffect, useState, useRef } from "react";
import '../App.css';
import {Link} from 'react-router-dom';

function NavbarMatic() {
  return (
    <div className="Navbar">
      <ul className="Link">
        <Link to="/Polygon">
            <li>Polygon</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavbarMatic;