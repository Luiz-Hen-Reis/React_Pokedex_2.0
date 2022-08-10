import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Loading from "../components/Loading";
import { POKEAPI } from "../utils/axios";
import { PokemonCard, Pagination } from "../components";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const pokemonsPerPage = 24;

  const getPokemons = async () => {
    try {
      setLoading(true);
      const data = await POKEAPI.FETCH_POKEMONS(
        pokemonsPerPage * page,
        pokemonsPerPage
      );
      const promise = data.results.map(
        async (pokemon) => await POKEAPI.GET_POKEMONS(pokemon.url)
      );

      const results = await Promise.all(promise);
      setTotalPages(Math.ceil(data.count / pokemonsPerPage));
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLeftClick = () => {
    if (page > 0) setPage(page - 1);
  };
  const handleRightClick = () => {
    if (page < totalPages) setPage(page + 1);
  };

  useEffect(() => {
    getPokemons();
  }, [page]);

  return (
    <Wrapper>
      <div className="header-top">
        <h1>pokedex</h1>
        <Pagination
          totalPages={totalPages}
          page={page + 1}
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
        />
      </div>
      {loading && <Loading />}
      <article className="cards">
        {!loading &&
          pokemons.map((pokemon, index) => (
            <div key={index}>
              <PokemonCard pokemons={pokemon} />
            </div>
          ))}
      </article>
    </Wrapper>
  );
};
export default Pokedex;

// styles
const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  .header-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 2rem;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 98%;
      margin-bottom: 0;
    }
  }

  h1 {
    margin: 2rem 2rem 4rem;
  }

  .loading {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;

    h1 {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (min-width: 768px) {
    .cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 992px) {
    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
