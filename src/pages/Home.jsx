import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  
  
`
const StImg = styled.img`
      width: 700px;
      height: 400px;
      
`
const StBtn = styled.button`
width: 150px;
height: 50px;
border-radius: 10px;
background-color: orange;
color: #363838;
margin-left: 40px;

`
const Home = () => {
  const navigate = useNavigate();
  return (
    <Logo>
      <StImg src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png" alt="" />
      <br />
      <StBtn onClick={()=>{navigate("/dex");
    }}>포켓몬 도감 시작하기</StBtn>
    
    
      </Logo>
  )
}

export default Home