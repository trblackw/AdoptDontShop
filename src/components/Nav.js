import React from "react";
import styled from "styled-components";
import { NavLink } from "@reach/router";

const Nav = () => (
  <NavContainer>
    <NavUl>
      <li>
        Home
      </li>
      <li>
        Search
      </li>
    </NavUl>
  </NavContainer>
);

export default Nav;

const NavContainer = styled.div`
  background: #07889b;
  color: whitesmoke;
  margin: 0;
  width: 100%;
  height: 70px;
`;

const NavUl = styled.ul`
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
