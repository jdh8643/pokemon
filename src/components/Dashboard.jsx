import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { deletePokemon } from '../store/Slice';


const DashboardBox = styled.ul`
  display: flex;
  width: 100;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 100px 80px;
  margin: 10px auto 30px;
background-color: orange;
border: 3px solid;
border-radius: 10px;


`;

const SelectedPokemon = styled.li`
max-width: 100px;
padding: 30px;

`;
const SelectedPokemon1 = styled.img`

    width : 100px;
    height: 100px;
    
`
const Title = styled.p`
display: flex;
justify-content: center;
font-size: 60px;
color: #72520c;
height: 100px;
align-items: center;
-webkit-text-stroke: 0.5px yellow;
`
const Dashboard = () => {


const dispatch = useDispatch();
const selectedPokemon = useSelector((state)=>state.pokemon);
return (
  <>
  <h1>
  <Title>나만의 포켓몬</Title>
  <DashboardBox>
    {selectedPokemon.map((pokemon) => {
      return (
        
        <SelectedPokemon  key={pokemon.id}>
          
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
            <p>{pokemon.korean_name}</p>
            <p>No. {pokemon.id}</p>
            <button onClick={() => dispatch(deletePokemon(pokemon.id))}>삭제</button>
          
        </SelectedPokemon>
      );
    })}

{new Array(6 - selectedPokemon.length).fill(null).map((_,index)=>{
  return(
    <li key={index}  >
    <SelectedPokemon1
            src="https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png" 
            alt="" 
          /></li>
  );
})}


  </DashboardBox>
  </h1>
  </>
);
}


export default Dashboard