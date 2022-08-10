import React from "react";
import main from "../assets/images/main.png";
import styled from "styled-components";
import { Logo } from "../components";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <header className="container">
        <div className="left-side">
          <div>
            <Logo />
          </div>
          <h1>
            my <span>pokemon</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <button onClick={() => navigate("/register")}>Sign Up</button>
        </div>
        <div className="img-container">
          <img src={main} alt="pikachu" />
        </div>
      </header>
    </Wrapper>
  );
};

// styles
const Wrapper = styled.main`
  width: var(--view-width);
  height: var(--view-height);
  background-color: var(--cerulean-blue);
  color: var(--white-text);

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;

    .logo-img {
      width: 14rem;
      height: 6rem;
    }

    h1 {
      margin-top: 1rem;
      font-size: 2.76rem;
    }

    span {
      color: var(--gold-foil);
    }

    .left-side {
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: center;
      margin: 1rem;

      button {
        display: block;
        width: 6rem;
        height: 2rem;
        color: var(--white-text);
        background-color: var(--lighten-red);
        border-radius: var(--border-radius);
        transition: all ease 0.3s;
        margin-top: 0.5rem;

        &:hover {
          background-color: var(--normal-red);
          color: var(--gold-foil);
        }
      }
    }

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      align-items: center;
      justify-content: center;
      height: inherit;

      h1 {
        font-size: 3.33rem;
      }
    }
  }

  .img-container {
    display: none;
    @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 20rem;
        height: 20rem;
      }

      @media screen and (min-width: 992px) {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 24rem;
          height: 24rem;
        }
      }
    }
  }
`;

export default Landing;
