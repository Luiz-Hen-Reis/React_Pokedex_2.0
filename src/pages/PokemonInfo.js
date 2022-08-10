import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { PokemonInfoCard } from "../components";
import { POKEAPI } from "../utils/axios";

const PokemonInfo = () => {
  const params = useParams();
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPokemonInfo = async () => {
    try {
      setLoading(true);
      const resp = await POKEAPI.GET_POKEMON_INFO(params.pokemon);
      setPokemonInfo(resp);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemonInfo();
  }, []);

  return (
    <Wrapper>      
      {loading && <Loading />}
      {!loading && <PokemonInfoCard pokemonInfo={pokemonInfo} />}
    </Wrapper>
  );
};

export default PokemonInfo;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  .info-container {
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
  }

  .left-side {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 96%;
    margin-top: 1rem;
    border: 10px solid var(--golden-yellow);
    border-radius: 5px;
    height: 500px;
    position: relative;

    @media screen and (min-width: 768px) {
      margin: 0;
    }

    img {
      width: 100%;
      height: 100%;
    }
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
