
import React from 'react'
import {HeaderContainer, MainHeader,UserHeader} from "./HeaderStyles"
import Form from './Form'

const Header = ({ setQuery, getData, mealTypes, setMeal }) => {
  const user = JSON.parse(sessionStorage.getItem('user'))
  return (
    <div>
      
      <HeaderContainer>
      {user && <UserHeader>{`Hi,${user ? user.username.toUpperCase() : "Anthony"}! Welcome to my recipe app!`}</UserHeader>}
      <MainHeader>Food App</MainHeader>
      
      <Form
        setQuery={setQuery} 
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
      />
    </HeaderContainer>
    </div>
  )
}

export default Header