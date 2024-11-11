import React, { useState } from 'react'
import Dashboard from '../components/Dashboard'
import PokemonList from '../components/PokemonList'
import { ContextApi } from '../shared/ContextApi';


const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    // 이미 있는지 검증
    const isAreadySelelcted = selectedPokemon.some((item) => {
      return item && item.id === pokemon.id;
    });

    if(isAreadySelelcted){
      alert('이미 저장된 포켓몬 입니다.');
      return;
    }



    // true일 시 alert 띄우고 종료
   

    if (selectedPokemon.length >= 6) {
      alert("6개 이상입니다");
      return;
    }

    // 최대 6개 체크
    //const selectdCount = selectedPokemon.filter((item) => item !== null).length;

    // 리스트에 추가
    setSelectedPokemon([...selectedPokemon, pokemon]);

    /*
    const firstNullIndex = selectedPokemon.indexOf(null);
    if (firstNullIndex !== -1) {
      const newSeletedPokemon = [...selectedPokemon];
      newSeletedPokemon[firstNullIndex] = pokemon;

      setSelectedPokemon(newSeletedPokemon);
    }
      */
  };


  const deletePokemon = (id) => {
setSelectedPokemon(selectedPokemon.filter((pokemon) => pokemon.id !== id));
};


  return (
    <div>
      <ContextApi.Provider value={{selectedPokemon,deletePokemon,addPokemon}}>
        
      <Dashboard 
      // selectedPokemon={selectedPokemon}
      // deletePokemon={deletePokemon}
      />
      <PokemonList addPokemon={addPokemon}/>
      </ContextApi.Provider>
    </div>
  );
};

export default Dex;