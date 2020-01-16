import React from "react";
import "./style.css";

function BorderBox({children}) {
  return (
    <div class="border border-dark">{children}</div>
  );
}

export default BorderBox;
