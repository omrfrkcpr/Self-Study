import React, { useContext } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";
import { HomeImg, ImgDiv } from "./HomeStyles";
import homeSvg from "../../assets/home.svg";
import { RecipeContext } from "../../context/RecipeProvider";



const Home = () => {
const {recipes}=useContext(RecipeContext)
console.log(recipes);
  return (
    <div>
      <Header />

      {recipes.length > 0 ? (
        <div>
      
          <RecipeCard />
        </div>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} alt="" />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
