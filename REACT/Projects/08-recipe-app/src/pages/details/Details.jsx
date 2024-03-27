import React from "react";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngredContainer,
  OtherPart,
} from "./DetailsStyles";
import dietsvg from "../../assets/diet.svg";
import { useLocation, useNavigate } from "react-router-dom";
const Details = () => {
  const navigate=useNavigate()
  const {
    state: { recipe },
  } = useLocation();
  console.log(recipe);
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{recipe.label} </h1>
        <img style={{cursor:"pointer"}} src={dietsvg} alt="" onClick={()=>navigate(-1)}/>
      </HeaderContainer>

      <DetailPart>
        <OtherPart>
          <>Nutrients</>

          <p>
            {recipe.totalNutrients.CA.label}:
            {Math.round(recipe.totalNutrients.CA.quantity)}
            {recipe.totalNutrients.CA.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOCDF.label}:
            {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
            {recipe.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOLE.label}:
            {Math.round(recipe.totalNutrients.CHOLE.quantity)}
            {recipe.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {recipe.totalNutrients.ENERC_KCAL.label}:
            {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{recipe.totalWeight} </p>
          <p>Calories:{Math.round(recipe.calories)} </p>
          {/* digest key i ile bize 29 elemanlı bir dizi geliyor, biz onun 4 elemanını bastırmak için slice kullandık */}
          <p>
            {recipe.digest.slice(0, 4).map((item, index) => (
              <p key={index}>
                {item.label}: {Math.round(item.total)}
              </p>
            ))}
          </p>
        </OtherPart>

        <ImgContainer>
          <img src={recipe.image} alt="" />
        </ImgContainer>

        <IngredContainer>
          {recipe.ingredientLines.map((item, index) => (
            <div key={index}>
              <p>{index+1}  * {item}</p>
            </div>
          ))}
        </IngredContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;
