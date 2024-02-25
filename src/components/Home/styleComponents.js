import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: #00a7f8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HomeName = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`

export const HomePar = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`
export const HomeImg = styled.img`
  width: 80%;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
`
