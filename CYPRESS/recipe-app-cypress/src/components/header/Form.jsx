import React from "react";
import { Button, FoodInput, FormContainer, Select } from "./HeaderStyles";

const Form = ({ setQuery, getData, mealTypes, setMeal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput
        data-test="homeSearch"
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button data-test="homeSearchBtn" type="submit">
        Search
      </Button>
      <Select
        data-test="homeCategory"
        name="mealTypes"
        id="mealTypes"
        onChange={(e) => setMeal(e.target.value)}
      >
        {mealTypes.map((meal, index) => {
          return (
            <option key={index} value={meal}>
              {meal}
            </option>
          );
        })}
      </Select>
    </FormContainer>
  );
};

export default Form;
