import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import MOCK_DATA from '../mock/MOCK_DATA';


const DetailContainer = styled.div`
    text-align: center;
    margin-top: 20px;
`;

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #FFF5E0;
    }
`;

const DetailImg = styled.img`
    width: 200px;
    height: 200px;
`;

const DetailButton = styled.button`
    background-color: #DECEAE;
    border-radius: 5px;
`

const PokemonDetail = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState();
    const navigate = useNavigate();

    const handleBackButton = () =>{
        navigate('/dex');
    }

    const getPokemonId = (id) => {
    return MOCK_DATA.find((pokemon) => pokemon.id === Number(id));
};

    useEffect(()=> {
        const fetchPokemon = getPokemonId(id);
        setPokemon(fetchPokemon);
    }, [id])


    return (
        <>
        <GlobalStyle/>
        <DetailContainer>
        <DetailImg src={pokemon?.img_url} alt={pokemon?.korean_name}/>
        <h2>{pokemon?.korean_name}</h2>
        <p>{pokemon?.description}</p>
        <p>타입 : {pokemon?.types.join(", ")}</p>
        <DetailButton onClick={handleBackButton}>뒤로가기</DetailButton>
        </DetailContainer>
    </>
  )
    }
;

export default PokemonDetail