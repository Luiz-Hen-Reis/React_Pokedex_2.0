import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PokemonCard from "../components/PokemonCard";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { removeAllFromFavoriteList } from "../redux/reducers/favoritesSlice";
import { POKEAPI } from "../utils/axios";
import { Link } from "react-router-dom";
import { IoTrashSharp } from 'react-icons/io5'

const Favorites = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((store) => store.favorites);
  const [favoritesArray, setFavoritesArray] = useState(favorites);
  const [favoritesPokemons, setFavoritesPokemons] = useState();
  const [loading, setLoading] = useState(false);

  const getFavorites = async () => {
    if (favorites) {
      try {
        setLoading(true);
        const promise = favoritesArray.map(
          async (fav) => await POKEAPI.GET_POKEMON_INFO(fav)
        );
        const results = await Promise.all(promise);
        setFavoritesPokemons(results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);

  const cleanAllFavorites = () => {
    dispatch(removeAllFromFavoriteList());
    window.location.reload();
  };

  if (favoritesPokemons) {
    return (
      <Wrapper>
        <div className="header-top">
          <h1>Favorites</h1>
          <div className="clean-button" onClick={cleanAllFavorites}><span><IoTrashSharp size={45} /></span>
          clean all favorites</div>
        </div>
        <div>
          {loading && <Loading />}
          {!loading && favoritesPokemons && (
            <div className="cards">
              {favoritesPokemons.map((fav, index) => {
                return <PokemonCard pokemons={fav} key={index} />;
              })}
            </div>
          )}
          {!loading &&  favoritesPokemons.length === 0 && (
            <div className="empty">
              <h3>Your Favorites List Is Empty.</h3>
              <p><Link to='/'>Back to Pokedex</Link></p>
            </div>
          )}
        </div>
      </Wrapper>
    );
  }
};

export default Favorites;

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

  .clean-button {
    background: none;
    color: var(--white-text);
    transition: all ease .3s;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: capitalize;
    font-size: .5rem;

    &:hover {
      color: var(--gold-foil);
    }
  }

  .empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
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
