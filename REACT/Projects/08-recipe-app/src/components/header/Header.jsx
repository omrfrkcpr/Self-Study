import React from "react";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./HeaderStyles";

const Header = () => {

  return (
    <HeaderContainer>
      <MainHeader>FOOD APP</MainHeader>

      <FormContainer >
        <FoodInput
          type="text"
          placeholder="Search"
        />

        <Button type="submit">Search</Button>

        <Select
          name="ogunTypes"
          id="ogunTypes"
        >
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>TeaTime</option>
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
