import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TypesCardContainer from "./TypesCardContainer";
import { backgroundBasedOnType } from "../utils/backgroundBasedOnType";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToFavoriteList } from "../redux/reducers/favoritesSlice";

const PokemonInfoCard = ({ pokemonInfo }) => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { favorites } = useSelector((store) => store.favorites);
  const dispatch = useDispatch();

  const imageUrl = pokemonInfo
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`
    : null;

  const markAsFavorite = () => {
    if (favorites.length === 0) {
      dispatch(addToFavoriteList(pokemonInfo.name));
    } else if (
      favorites.length > 0 &&
      favorites.indexOf(pokemonInfo.name) === -1
    ) {
      dispatch(addToFavoriteList(pokemonInfo.name));
    }
    setDisabled(true);
  };

  return (
    <div className="info-container">
      <div
        className="left-side"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `${
            backgroundBasedOnType[
              pokemonInfo.types ? pokemonInfo.types[0].type.name : null
            ]
          }`,
        }}
      >
        <Favorite onClick={markAsFavorite} disabled={favorites.indexOf(pokemonInfo.name) !== -1 ?? disabled}>
          <BsBookmarkHeartFill size={50} />
        </Favorite>
        <img src={imageUrl} alt={pokemonInfo.name} />
      </div>
      <article className="right-side">
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
      </article>
    </div>
  );
};

export default PokemonInfoCard;

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
