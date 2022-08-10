import React from "react";
import Logo from "./Logo";
import styled from "styled-components";
import NavLinks from "./NavLinks";
import { useDispatch } from "react-redux";
import { userLogout } from "../redux/reducers/userSlice";

const NavBar = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userLogout());
  }

  return (
    <Wrapper>
      <nav>
        <div className="logo-container">
          <Logo />
        </div>
        <NavLinks />
        <div>
          <button onClick={logout}>logout</button>
        </div>
      </nav>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  margin: 0;

  .logo-container {
    display: none;

    @media screen and (min-width: 768px) {
      display: inline-block;
    }
  }

  nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.89rem;
    background-color: var(--black);
  }

  button {
    background-color: var(--cerulean-blue);
    color: var(--white-text);
    padding: 5px 9px;
    border-radius: var(--border-radius);
    transition: all ease 0.3s;

    &:hover {
      color: var(--gold-foil);
    }
  }
`;
