import MOCK_DATA from '../data/MOCK_DATA'
import PokemonCard from './PokemonCard'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(6,1fr);
  gap: 20px;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
`
const PokemonList = ({addPokemon, removePokemon}) => {
  return (
    <StyledDiv>
        {MOCK_DATA.map((pokemon)=>
        <PokemonCard key={pokemon.id} pokemon={pokemon} addPokemon={addPokemon} removePokemon={removePokemon} onDashbord={false}/>)}
    </StyledDiv>
  )
}

export default PokemonList