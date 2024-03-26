import React from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard";
import { HomeImg, ImgDiv } from "./HomeStyles";
import homeSvg from "../../assets/home.svg";



const Home = () => {


  return (
    <div>
      <Header />

    
        <div>
          <RecipeCard />
        </div>
    
        <ImgDiv>
          <HomeImg src={homeSvg} alt="" />
        </ImgDiv>
 
    </div>
  );
};

export default Home;
