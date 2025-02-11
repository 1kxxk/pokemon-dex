import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
const StyledButton = styled.button`
  background-color: red;
  color: white;
`
const StyledP = styled.p`
  color: gray;
  margin-top: 0;
  margin-bottom: 30px;
`
const PokemonCard = ({pokemon, addPokemon, removePokemon, onDashbord}) => {
  const navigate = useNavigate()

  const handleButton = (e)=>{
    e.stopPropagation();
    onDashbord ? removePokemon(pokemon.id) : addPokemon(pokemon)
    }

  return (
    <StyledDiv onClick={()=> navigate(`/PokemonDetail/${pokemon.id}`)}>
        <img src={pokemon.img_url} alt="" />
        <h4>
            {pokemon.korean_name}
        </h4>
        <StyledP>
            No. 00{pokemon.id}
        </StyledP>
        <StyledButton onClick={(e)=>handleButton(e)}>
            {onDashbord ? '삭제' : '추가'}
        </StyledButton>
    </StyledDiv>
  )
}

export default PokemonCard