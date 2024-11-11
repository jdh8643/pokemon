import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const CardContainer =styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
border: 1px solid black;
padding: 10px;
margin: 10px 50px;
border-radius: 10px;
background-color: beige;

`
const Card = styled.div`
  gap: 10px;
a{display: flex;
  flex-direction: column;
  align-items: center;
  }
  `
  
const PokemonCard = ({pokemon,addPokemon}) => {

  const navigate = useNavigate();

  return (
    
    <CardContainer>
      <Card>
      <a
        onClick={(e) => {
          const tagName = e.target.tagName;
          if(tagName !== 'BUTTON'){
          navigate(`/pokemondetail/${pokemon.id}`);
        }}}
      >
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <p>{pokemon.korean_name}</p>
        <p>No. {pokemon.id}</p>
        <button onClick={() => addPokemon(pokemon)}>추가</button>
      </a>
      </Card>
    </CardContainer>
  )
}

export default PokemonCard