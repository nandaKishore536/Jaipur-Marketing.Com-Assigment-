import {useState} from 'react'

import DataContext from '../../context/DataContext'

import {
  MainContainer,
  Form,
  Input,
  MainHeading,
  Image,
  SignUp,
} from './StyleComponents'

const Create = props => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onName = event => {
    setName(event.target.value)
  }

  const onPhone = event => {
    setPhone(event.target.value)
  }

  const onEmail = event => {
    setEmail(event.target.value)
  }

  const onPassword = event => {
    setPassword(event.target.value)
  }

  return (
    <DataContext.Consumer>
      {value => {
        const {UpdateData} = value
        const {history} = props

        const onTap = event => {
          event.preventDefault()
          const s = {name, phone, email, password}
          UpdateData(s)
          history.replace('/home')
          setName('')
          setPassword('')
          setEmail('')
          setPhone('')
        }

        return (
          <MainContainer>
            <Form onSubmit={onTap}>
              <MainHeading>Create Account</MainHeading>
              <Image
                src="https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg?w=996&t=st=1708868419~exp=1708869019~hmac=82f522bd07ba71e95ccbba35df0b77e90ff8b0d3ec709e9d7a879c1654fabef7"
                alt="img"
              />
              <Input
                type="text"
                placeholder="Full Name"
                required
                value={name}
                onChange={onName}
              />
              <Input
                type="phone"
                placeholder="Phone"
                required
                value={phone}
                onChange={onPhone}
              />
              <Input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={onEmail}
              />
              <Input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={onPassword}
              />

              <SignUp type="submit">Sign up</SignUp>
            </Form>
          </MainContainer>
        )
      }}
    </DataContext.Consumer>
  )
}

export default Create
