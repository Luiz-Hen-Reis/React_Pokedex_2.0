import React, { useEffect, useState } from "react";
import pokemons from "../assets/images/pokemons.jpg";
import styled from "styled-components";
import { FormRow, Logo } from "../components";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_USER, REGISTER_USER } from "../redux/reducers/userSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields");
      return;
    }

    if (isMember) {
      dispatch(LOGIN_USER({ email: email, password: password }));
      return;
    }

    dispatch(REGISTER_USER({ name, email, password }));
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);

  return (
    <Wrapper>
      <div className="container">
        <div className="left-side">{/* not displayed in small screens */}</div>
        <div className="right-side">
          <form onSubmit={handleSubmit}>
            <div className="logo-container">
              <Logo />
            </div>
            <h2>{values.isMember ? "Login" : "Register"}</h2>
            {/* name field */}
            {!values.isMember && (
              <FormRow
                name="name"
                type="text"
                value={values.name}
                handleChange={handleChange}
              />
            )}
            {/* email field */}
            <FormRow
              name="email"
              type="email"
              value={values.email}
              handleChange={handleChange}
            />
            {/* password field */}
            <FormRow
              name="password"
              type="password"
              value={values.password}
              handleChange={handleChange}
            />
            <button
              type="submit"
              className="register-login-btn"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
            <p>
              {values.isMember ? "Not a member yet?" : "Already a member?"}
              <button
                type="button"
                className="toggle-member"
                onClick={toggleMember}
              >
                {values.isMember ? "Register" : "Login"}
              </button>
            </p>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

// styles
const Wrapper = styled.main`
  width: var(--view-width);
  height: var(--view-height);
  background-color: var(--cerulean-blue);
  color: var(--white-text);
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--cerulean-blue);
  }

  .container {
    background-color: var(--smoked-white);
    color: black; //change
    width: 26rem;
    height: 28rem;
    padding: 1.98rem 0;
    border-radius: var(--border-radius);
    display: flex;

    @media screen and (min-width: 768px) {
      width: 52rem;
      height: 28rem;
      flex-direction: row;
      padding: 0;
      box-shadow: var(--box-shadow);
    }
  }

  .left-side {
    display: none;

    @media screen and (min-width: 768px) {
      display: inline-block;
      width: 60%;
      height: inherit;
      background-image: url(${pokemons});
      background-position: center;
      background-size: cover;
      border-radius: 5px 0 0 5px;
    }
  }

  .right-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: inherit;

    @media screen and (min-width: 768px) {
      width: 40%;
    }

    .logo-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem 0;
    }

    .logo-img {
      width: 6rem;
      height: 2rem;
    }
  }

  .register-login-btn {
    display: inline-block;
    width: 14rem;
    height: 35px;
    color: var(--white-text);
    background-color: var(--lighten-red);
    border-radius: var(--border-radius);
    transition: all ease 0.3s;
    margin-top: 0.5rem;

    &:hover {
      background-color: var(--normal-red);
      color: var(--gold-foil);
    }

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }

  p {
    font-size: 13px;
    margin-top: 1.955rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Register;
