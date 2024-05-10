
import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg,StyledInput } from './LoginStyles'
import meal from "../../assets/meal.svg"


const Login = () => {
  const Navigate = useNavigate()
  const [username, setUsername] = useState('Anthony')
  const user= {
    username: `${username}`,
  }
  const loginSubmit  = (e) => {
    e.preventDefault()
    
    Navigate("/home")
    sessionStorage.setItem("user",JSON.stringify(user))
  }
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>
          {`<Anthony/>`}Recipe
        </Header>
        <StyledForm onSubmit={loginSubmit}>
          <StyledInput type="text" placeholder="Username" name="username" onChange={(e)=>setUsername(e.target.value)} required />
          <StyledInput type="password" placeholder="Password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login