import React, { useContext } from "react";
import MOCK_DATA from "../mock/MOCK_DATA";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import { ContextApi } from "../shared/ContextApi";

  const PokeList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
  `;
const PokemonList = () => {

  const {addPokemon}=useContext(ContextApi);
  return (
    <PokeList>
      {MOCK_DATA.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            addPokemon={addPokemon}
          />
        );
      })}
    </PokeList>
  );
};

export default PokemonList;
