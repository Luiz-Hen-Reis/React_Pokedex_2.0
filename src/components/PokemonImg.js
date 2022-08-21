import React from "react";

const PokemonImg = ({ id }) => {
  return (
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
    />
  );
};

export default PokemonImg;
