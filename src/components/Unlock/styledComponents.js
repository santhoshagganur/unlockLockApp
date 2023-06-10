// Style your elements here

import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(to bottom, #161617, #3c2940);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Status = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 500;
  color: #ffffff;
`

export const StatusButton = styled.button`
  background-color: #06b6d4;
  font-size: 14px;
  color: #ffffff;
  border-radius: 2px;
  border-width: 0;
  padding: 10px;
`
