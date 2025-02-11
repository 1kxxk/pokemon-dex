import React from 'react'
import styled from 'styled-components'
import PokemonCard from './PokemonCard'

const StyledDiv = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-top: 20px;
`
const StyledImg = styled.img`
  width: 50px;
  height: 50px;
`
const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-left: 0;
`
const StyledH2 = styled.h2`
  color: red;
  text-align: center;
`
const Styledli = styled.li`
  background-color: white;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Dashboard = ({ addedPokemons, removePokemon }) => {
    return (
        <StyledDiv>
            <StyledH2>나만의 포켓몬</StyledH2>
            <StyledUl>
                {addedPokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} addedPokemons={addedPokemons} removePokemon={removePokemon} onDashbord={true} />
                ))}
                {Array.from({ length: 6 - addedPokemons.length }).map((_, index) => (
                    <Styledli key={index}>
                        <StyledImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png" alt="" />
                    </Styledli>
                ))}
            </StyledUl>
        </StyledDiv>
    )
}
export default Dashboard

