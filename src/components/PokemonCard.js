import React from "react";
import styled from "styled-components";
import TypesCardContainer from "./TypesCardContainer";
import { useNavigate } from "react-router-dom";
import { backgroundBasedOnType } from "../utils/backgroundBasedOnType";

const PokemonCard = ({ pokemons }) => {
  const navigate = useNavigate();
  const pokemonAnimatedImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemons.id}.gif`;

  const showPokemonInfoInANewTab = () => {
    const url = `/pokedex/${pokemons.name}`
    window.open(url, '_blank');
  }

  return (
    <Wrapper>
      <CardContainer
        onClick={showPokemonInfoInANewTab}
        background={`${backgroundBasedOnType[pokemons.types[0].type.name]}`}
      >
        <div className="img-container">
          <img src={pokemonAnimatedImage} alt={pokemons.name} />
        </div>
        <div className="right-side">
          <div className="top">
            <h5>{pokemons.name}</h5>
            <h5>#{pokemons.id < 10 ? `0${pokemons.id}` : pokemons.id}</h5>
          </div>
          <div className="bottom">
            {pokemons.types.map((type, index) => (
              <TypesCardContainer type={type.type.name} key={index} />
            ))}
          </div>
        </div>
      </CardContainer>
    </Wrapper>
  );
};

export default PokemonCard;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .right-side {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    text-transform: capitalize;
    color: var(--white-text);

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .bottom {
      display: flex;
      gap: 3rem;
      align-items: center;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98%;
  margin-bottom: 0.5rem;
  height: 8rem;
  transition: all ease 0.2s;
  background-image: ${(props) => props.background};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    border: 4px solid var(--cerulean-blue);
    border-radius: var(--border-radius);
  }

  .img-container {
      img {
        width: 7rem;
        height: 7rem;
        margin-top: -2rem;

        @media screen and (min-width: 768px) {
          width: 9rem;
          height: 9rem;
        }
      }
    }
`;
