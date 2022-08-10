import axios from "axios";

export const USER_FETCH = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

 const BASE = 'https://pokeapi.co/api/v2';

export const POKEAPI = {
  FETCH_POKEMONS: async (offset = 0, limit = 24) => {
    const resp = await axios.get(`${BASE}/pokemon?offset=${offset}&limit=${limit}`);
    return resp.data;
  },
  GET_POKEMONS: async (url) => {
    const resp = await axios.get(url);
    return resp.data;
  },
  GET_POKEMON_INFO: async (name) => {
    const resp = await axios.get(`${BASE}/pokemon/${name}/`);
    return resp.data;
  },
}