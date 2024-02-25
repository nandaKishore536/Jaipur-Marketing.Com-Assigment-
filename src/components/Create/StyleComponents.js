import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #00a7f8;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 8px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #3b4856;
  border-radius: 4px;
  color: #3b4856;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  outline: none;

  @media screen and (min-width: 768px) {
    padding: 12px;
    margin-bottom: 20px;
    border-radius: 6px;
    font-size: 16px;
  }
`

export const MainHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 30px;

  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const Image = styled.img`
  width: 200px;
  margin-top: 5px;
  margin-bottom: 15px;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    margin-top: 25px;
    margin-bottom: 25px;
  }
`

export const SignUp = styled.button`
  background-color: #3b4856;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 12px;
    border-radius: 6px;
  }
`
