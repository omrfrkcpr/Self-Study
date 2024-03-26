import React from "react";
import {
  Button,
  Cards,
  MainContainer,
  RecipeHeader,
  RecipeImage,
} from "./HomeStyles";
import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeProvider";

const RecipeCard = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <MainContainer>
      {recipes.map((a) => (
        <Cards key={a.recipe.id}>
          <RecipeHeader>{a.recipe.label}</RecipeHeader>

          <RecipeImage src={a.recipe.image} />
          <Button>Details</Button>
        </Cards>
      ))}
    </MainContainer>
  );
};

export default RecipeCard;
