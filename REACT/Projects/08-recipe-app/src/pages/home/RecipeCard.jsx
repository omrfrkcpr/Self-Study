import React, { useContext } from "react";
import {
  Button,
  Cards,
  MainContainer,
  RecipeHeader,
  RecipeImage,
} from "./HomeStyles";
import { RecipeContext } from "../../context/RecipeProvider";
import { useNavigate } from "react-router-dom";


const RecipeCard = () => {
const {recipes}=useContext(RecipeContext)
console.log(recipes);
const navigate=useNavigate()
  return (
    <MainContainer>
   
      {recipes.map(({recipe}) => (
        <Cards key={recipe.calories} >
          <RecipeHeader>{recipe.label} </RecipeHeader>

          <RecipeImage src={recipe.image} />
          <Button onClick={()=>navigate("/details", {state:{recipe}})}>
            Details
          </Button>
        </Cards>
      ))}
    </MainContainer>
  );
};

export default RecipeCard;
