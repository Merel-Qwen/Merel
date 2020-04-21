import React from "react";
import { Link } from "react-scroll";

function Introduction() {
  return (
    <div>
      <h1>Welcome to the brewery app</h1>
      <div className="search">
        <p className="pIntro">
          {" "}
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
            <a> CLICK HERE </a>
          </Link>
          to go straight to the searchfield
        </p>
      </div>
    </div>
  );
}

export default Introduction;
