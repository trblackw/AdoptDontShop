import React from "react";
import { Link } from "@reach/router";
import styled from "react-emotion";

const Nav = () => (
      <NavContainer className="shadow">
        <NavUl>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/search-query">
              Search
            </Link>
          </li>
        </NavUl>
      </NavContainer>
);

export default Nav;

const NavContainer = styled("header")`
  background: #07889b;
  color: whitesmoke;
  margin: 0;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #036877;
  font-family: "Varela Round", sans-serif;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavUl = styled("ul")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 1em;
  list-style: none;

  li {
    margin-right: 0.6em;
  }
`;
