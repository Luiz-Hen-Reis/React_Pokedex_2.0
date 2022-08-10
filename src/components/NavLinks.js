import React from "react";
import styled from "styled-components";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <Wrapper>
      {links.map((link) => (
        <NavLink
          to={link.path}
          key={link.id}
          className={({ isActive }) =>
            isActive ? "navlink active" : "navlink"
          }
        >
          <h5>{link.text}</h5>
        </NavLink>
      ))}
    </Wrapper>
  );
};

export default NavLinks;

const Wrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 66%;

  .navlink {
    margin-right: 2rem;
    color: var(--white-text);
  }

  h5 {
    @media screen and (max-width: 375px) {
      font-size: .9rem;
    }
    margin: 0;
  }

  .active {
    color: var(--gold-foil);
    border-bottom: 4px solid var(--gold-foil);
    padding: 10px;
    background-color: var(--black);
  }
`;
