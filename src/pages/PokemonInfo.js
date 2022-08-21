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
`;
