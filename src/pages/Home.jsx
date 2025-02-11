import React from 'react'
import {useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: #c50000;
    color: white;
    width: 200px;
`
const Home = () => {
  const Navigate = useNavigate()

  const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  `
  return (
    <StyledDiv>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
      <StyledButton onClick={() => Navigate('/dex')}>
        포켓몬 도감 시작하기
      </StyledButton>
    </StyledDiv>
  )
}

export default Home