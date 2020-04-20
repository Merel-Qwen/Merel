import React from "react";
import { Link } from "react-scroll";

function Introduction() {
  return (
    <div className="Search">
      <h1>Welcom to the brewery app</h1>
      <Link
        activeClass="active"
        to="searchfield"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
      >
        <button className="button">To searchfield</button>
      </Link>
    </div>
  );
}

export default Introduction;
