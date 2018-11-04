import React from "react";
import { Link } from "@reach/router";
import styled from "react-emotion";
import { Consumer } from "./SearchContext";

const Nav = () => (
  <Consumer>
    {context => (
      <NavContainer className="shadow">
        <h3>
          <span>Adopt</span>, Don't Shop
        </h3>
        <NavUl>
          <li>
            <Link to="/" onClick={() => context.resetSearch()}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/search-query" onClick={() => context.resetSearch()}>
              Search
            </Link>
          </li>
          <li>
            <Link to="/shelters">Shelters</Link>
          </li>
        </NavUl>
      </NavContainer>
    )}
  </Consumer>
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

  h3 {
    margin: 1.5em 1em;
    float: left;
    font-size: 1.4em;
    position: fixed;
  }

  span {
    text-decoration: underline;
    text-decoration-color: #f2934f;
    text-decoration-style: double;
  }
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
