import React from 'react';
import './Nav.css';

function Navbar() {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contacts</a>
          </li>
          <li>
            <a>More</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
