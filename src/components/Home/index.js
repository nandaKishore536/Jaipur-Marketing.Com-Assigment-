import {HomeContainer, HomeName, HomePar, HomeImg} from './styleComponents'

import Header from '../Header'

import DataContext from '../../context/DataContext'

const Home = () => (
  <DataContext.Consumer>
    {value => {
      const {Data} = value

      return (
        <>
          <Header />

          <HomeContainer>
            <HomeName>Hi {Data.name}</HomeName>
            <HomeImg
              src="https://img.freepik.com/free-photo/3d-render-online-education-survey-test-concept_107791-15665.jpg?t=st=1708883383~exp=1708886983~hmac=8f137d4d8d425edd9796ad6a3efec063a514a48e4cd56f3928429bfe01640b99&w=1060"
              alt="course"
            />
            <HomePar>What do you want to learn today {Data.name} ? </HomePar>
          </HomeContainer>
        </>
      )
    }}
  </DataContext.Consumer>
)

export default Home
