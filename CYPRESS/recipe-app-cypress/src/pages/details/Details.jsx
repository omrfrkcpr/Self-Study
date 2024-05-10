import React from "react";
import { useLocation } from "react-router-dom";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngredContainer,
  OtherPart,
} from "./DetailsStyles";
import dietSvg from "../../assets/diet.svg";
const Details = () => {
  const location = useLocation();
  const recipeDet = location.state.recipe;
  console.log(recipeDet);
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{recipeDet.label}</h1>
        <img src={dietSvg} alt="" />
      </HeaderContainer>
      <DetailPart>
        <OtherPart>
          <h6 data-test="contentHeader">Nutrients</h6>
          <p data-test="contentParag">
            {recipeDet.totalNutrients.CA.label} :
            {Math.round(recipeDet.totalNutrients.CA.quantity)}
            {recipeDet.totalNutrients.CA.unit}
          </p>
          <p data-test="contentParag">
            {recipeDet.totalNutrients.CHOCDF.label} :
            {Math.round(recipeDet.totalNutrients.CHOCDF.quantity)}
            {recipeDet.totalNutrients.CHOCDF.unit}
          </p>
          <p data-test="contentParag">
            {recipeDet.totalNutrients.CHOLE.label} :{" "}
            {Math.round(recipeDet.totalNutrients.CHOLE.quantity)}
            {recipeDet.totalNutrients.CHOLE.unit}
          </p>
          <p data-test="contentParag">
            {recipeDet.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(recipeDet.totalNutrients.ENERC_KCAL.quantity)}
            {recipeDet.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p data-test="contentParag">{recipeDet.totalWeight}</p>
          <p data-test="contentCal">
            Calories: {Math.round(recipeDet.calories)}
          </p>
          {recipeDet.digest.slice(0, 4).map((item, index) => (
            <p data-test={item.label + "test"} key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
        </OtherPart>
        <ImgContainer>
          <img
            data-test="contentImage"
            src={recipeDet.image}
            alt={recipeDet.label}
          />
        </ImgContainer>
        <IngredContainer>
          {recipeDet.ingredientLines.map((item, index) => (
            <p data-test={item + "test"} key={index}>
              {index + 1}. - {item}
            </p>
          ))}
        </IngredContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;
