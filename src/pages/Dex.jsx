import React from 'react'
import Dashboard from '../components/Dashboard'
import PokemonList from '../components/PokemonList'



const Dex = () => {
  


  

  return (
    <div>
      
        
      <Dashboard 
      // selectedPokemon={selectedPokemon}
      // deletePokemon={deletePokemon}
      />
      <PokemonList />
      
    </div>
  );
};

export default Dex;