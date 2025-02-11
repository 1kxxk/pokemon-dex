import React from 'react'
import MOCK_DATA from '../data/MOCK_DATA'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

const PokemonDetail = () => {
  const params = useParams()
  const navigate = useNavigate()

  const addedPokemons = MOCK_DATA.find((pokemon)=> pokemon.id === Number(params.id))

  const Styleddiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `
  const StyledH4 = styled.h4`
  color: red;
  `
  const StyledButton = styled.button`
    background-color: black;
    color: white;
  `
  return (
    <Styleddiv>
        <img src={addedPokemons.img_url} alt="" />
        <StyledH4>
          {addedPokemons.korean_name}
        </StyledH4>
        <p>
          타입 : {addedPokemons.types.join(', ')}
        </p>
        <p>
          {addedPokemons.description}
        </p>
        <StyledButton onClick={()=>{navigate(-1)}}>
          뒤로 가기
        </StyledButton>
    </Styleddiv>
  )
}

export default PokemonDetail