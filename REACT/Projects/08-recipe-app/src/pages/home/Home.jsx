import React from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";
import { HomeImg, ImgDiv } from "./HomeStyles";
import homeSvg from "../../assets/home.svg";
import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeProvider";

const Home = () => {
  const { recipes } = useContext(RecipeContext);
  return (
    <div>
      <Header />

      {recipes.length ? (
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
