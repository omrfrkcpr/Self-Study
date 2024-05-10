import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, RecipeCard, RecipeHeader, RecipeImage } from "./HomeStyles";

const RecipeCardComp = ({ recipe }) => {
  const navigate = useNavigate();
  const moreClick = () => {
    navigate("/details", { state: { recipe } });
  };
  return (
    <RecipeCard>
      <RecipeHeader data-test="cardHeader">{recipe.label}</RecipeHeader>
      <RecipeImage data-test="cardImage" src={recipe.image} alt="" />
      <Button data-test="cardBtn" onClick={moreClick}>
        View More
      </Button>
    </RecipeCard>
  );
};

export default RecipeCardComp;
