import axios from 'axios';
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import { ImgDiv, MainContainer,HomeImg } from './HomeStyles';
import homeSvg from "../../assets/home.svg"
import RecipeCardComp from './RecipeCardComp'

//personal key and id
const APP_ID = "e0550b67";
const APP_KEY  = "b9fce4db63d154f4247d4d944c3fba8f";


const Home = () => {
  const mealTypes = ["Breakfast", "Lunch", "Dinner","Snack","Teatime"];
  const [query,setQuery]=useState("")
  const [meal,setMeal]=useState(mealTypes[0])
  const [food,setFood]=useState()
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`

  const getData = async () => {
   if(query){
     const result =  await axios.get(url);
      setFood(result.data.hits)
      
    }else{
      console.log("please fill the Form")
    }
    
  }
  return (
    <div>
      <Header 
        setQuery={setQuery} 
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
      />


    {food? (<MainContainer>
    {food.map((liste,index)=>(
      <RecipeCardComp key={index} recipe={liste.recipe}/>
    ))}

    </MainContainer>

    ):<ImgDiv>
      <HomeImg src={homeSvg}/>
    </ImgDiv>}
    </div>
  )
}

export default Home