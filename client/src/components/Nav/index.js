import React from "react";

function Nav() {
  return (
    <nav class="nav">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a
            class="nav-link"
            href="/"
            tabindex="-1"
            aria-disabled="true"
          >
            Google Books
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/search">
            Search
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/saved">
            Saved
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
