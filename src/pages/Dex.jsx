import React, { useState } from 'react'
import Dashboard from '../components/Dashborard'
import PokemonList from '../components/PokemonList'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Dex = () => {
    const [addedPokemons, setAddedPokemons] = useState([])

    const addPokemon = (pokemon) => {
  
      if (addedPokemons.some((poke)=> pokemon.id === poke.id)) {
        alert('중복된 포켓몬을 선택하였습니다.')
        return;
      }
  
      if (addedPokemons.length >= 6) {
        alert('6개 이상 포켓몬을 선택하였습니다.'); 
        return; 
      } else {
        setAddedPokemons([...addedPokemons, pokemon]);
      }
    }
  
    const removePokemon = (id) => {
      setAddedPokemons(addedPokemons.filter((pokemon)=>id !== pokemon.id))
    }
  return (
    <StyledDiv>
        <Dashboard addedPokemons={addedPokemons} removePokemon={removePokemon}/>
        <PokemonList addedPokemons={addedPokemons} addPokemon={addPokemon} removePokemon={removePokemon}/>
    </StyledDiv>
  )
}

export default Dex