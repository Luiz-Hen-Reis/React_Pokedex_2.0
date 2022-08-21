import React from "react";
import styled from "styled-components";
import notFound from "../assets/images/notFound.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NotFound = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);

  const handleGetBack = () => {
    if (user) {
      navigate("/");
    } else {
      navigate("/landing");
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <h3>Oops! The page you were looking for doesn't exist</h3>
        <p>You may have mistyped the address or the page may have been moved</p>
        <button type="button" className="link" onClick={handleGetBack}>
          Take me back to the home page
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: var(--view-width);
  height: var(--view-height);
  background-image: url(${notFound});
  background-position: left center;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-position: left bottom;
  }

  .container {
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h3 {
    font-size: 1.55rem;
    margin-bottom: 2rem;

    @media screen and (min-width: 768px) {
      font-size: 1.9rem;
    }
  }

  p {
    font-family: cursive;
    font-weight: 500;
    margin-bottom: 2rem;

    @media screen and (min-width: 768px) {
      margin-bottom: 2.3rem;
    }
  }

  .link {
    text-decoration: none;
    color: var(--cerulean-blue);
    font-weight: 700;
    margin-bottom: 2rem;
    transition: all ease 0.3s;
    background: none;

    &:hover {
      color: var(--lighten-red);
    }

    @media screen and (min-width: 768px) {
      margin-bottom: 2.3rem;
    }
  }
`;

export default NotFound;
