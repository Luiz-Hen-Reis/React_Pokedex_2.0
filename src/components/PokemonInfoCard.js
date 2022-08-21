import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TypesCardContainer from "./TypesCardContainer";
import PokemonImg from "./PokemonImg";
import { backgroundBasedOnType } from "../utils/backgroundBasedOnType";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToFavoriteList } from "../redux/reducers/favoritesSlice";

const PokemonInfoCard = ({ pokemonInfo }) => {
  const [disabled, setDisabled] = useState(true);
  const { favorites } = useSelector((store) => store.favorites);
  const dispatch = useDispatch();

  const markAsFavorite = () => {
    if (favorites.indexOf(pokemonInfo.name) === -1) {
      dispatch(addToFavoriteList(pokemonInfo.name));
      toast.success(`${pokemonInfo.name} has been added to your favorite list`);
    }
    setDisabled(true);
  };

  return (
    <Wrapper>
      <ImgContainer
        background={`${
          backgroundBasedOnType[pokemonInfo.types ? pokemonInfo.types[0].type.name : null]}`}>
        <Favorite onClick={markAsFavorite} disabled={favorites.indexOf(pokemonInfo.name) !== -1 ?? disabled}>
          <BsBookmarkHeartFill size={50} />
        </Favorite>
        <PokemonImg id={pokemonInfo.id} />
      </ImgContainer>
      <div className="right-side">
        <h1>{pokemonInfo.name}</h1>
        <div className="h-w-container">
          <p className="p">
            height:{" "}
            {pokemonInfo.height < 10
              ? `0${pokemonInfo.height}`
              : pokemonInfo.height}
            m
          </p>
          <p className="p">weight: {pokemonInfo.weight}kg</p>
        </div>
        <div className="types-container">
          {pokemonInfo.types?.map((type, index) => (
            <TypesCardContainer type={type.type.name} key={index} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default PokemonInfoCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  background-color: var(--navy-blue);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0.5rem;
  }

  .right-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--navy-blue);
    width: 96%;
    height: 500px;
    margin-top: 0.5rem;
    border-radius: 5px;

    @media screen and (min-width: 768px) {
      margin-top: 0;
    }

    h1 {
      color: var(--smoked-white);
      text-decoration: underline;
      font-size: 2.4rem;
    }

    .h-w-container {
      display: flex;
      flex-direction: column;
      width: 98%;
      justify-content: space-evenly;
      align-items: center;

      .p {
        width: 33%;
      }
    }

    .p {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--cerulean-blue);
      width: 98%;
      padding: 8px 5px;
      font-weight: bold;
      text-transform: capitalize;
      border-radius: 5px;
    }

    .types-container {
      display: flex;
      justify-content: space-evenly;
      width: 98%;
      margin-top: 2rem;

      p {
        font-size: 1.55rem;
      }
    }
  }
`;

const Favorite = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  color: var(--normal-red);
  cursor: pointer;
  transition: all ease 0.3s;
  background: none;

  &:disabled {
    opacity: 0.5;
    color: var(--black);
  }

  &:hover {
    color: var(--lighten-red);
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96%;
  margin-top: 1rem;
  border: 10px solid var(--golden-yellow);
  border-radius: 5px;
  height: 500px;
  position: relative;
  background-image: ${(props) => props.background};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    margin: 0;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
