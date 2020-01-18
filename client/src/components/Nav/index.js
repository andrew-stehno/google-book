import React from "react";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a
            className="nav-link"
            href="/"
            tabIndex="-1"
            aria-disabled="true"
          >
            Google Books
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/search">
            Search
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/saved">
            Saved
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
