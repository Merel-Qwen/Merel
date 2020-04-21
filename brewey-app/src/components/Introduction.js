import React from "react";
import { Link } from "react-scroll";

function Introduction() {
  return (
    <div className="Search">
      <h1>Welcome to the brewery app</h1>
      <div>
        If you scroll down you will find a lot of beers. Sorted bij name and
        country.
        <Link
          activeClass="active"
          to="searchfield"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <button className="button">Click here</button>
        </Link>
        to go straight to the searchfield
      </div>
    </div>
  );
}

export default Introduction;
