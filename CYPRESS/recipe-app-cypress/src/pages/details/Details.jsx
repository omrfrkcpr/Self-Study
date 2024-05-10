import React from 'react'
import { useLocation } from 'react-router-dom'
import { DetailContainer,DetailPart,HeaderContainer, ImgContainer, IngredContainer, OtherPart } from './DetailsStyles';
import dietSvg from '../../assets/diet.svg'
const Details = () => {
  const location = useLocation();
  const recipeDet = location.state.recipe; 
  console.log(recipeDet)
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{recipeDet.label}</h1>
        <img src={dietSvg} alt=""/>
      </HeaderContainer> 
      <DetailPart>
        <OtherPart>
        <>Nutrients</>
          <p>
            {recipeDet.totalNutrients.CA.label} :
            {Math.round(recipeDet.totalNutrients.CA.quantity)}
            {recipeDet.totalNutrients.CA.unit}
          </p>
          <p>
            {recipeDet.totalNutrients.CHOCDF.label} :
            {Math.round(recipeDet.totalNutrients.CHOCDF.quantity)}
            {recipeDet.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {recipeDet.totalNutrients.CHOLE.label} :{" "}
            {Math.round(recipeDet.totalNutrients.CHOLE.quantity)}
            {recipeDet.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {recipeDet.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(recipeDet.totalNutrients.ENERC_KCAL.quantity)}
            {recipeDet.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{recipeDet.totalWeight}</p>
          <p>Calories: {Math.round(recipeDet.calories)}</p>
          {recipeDet.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
        </OtherPart>
        <ImgContainer>
            <img src={recipeDet.image} alt={recipeDet.label} />
        </ImgContainer>
        <IngredContainer>
        
          {recipeDet.ingredientLines.map((item, index) => (
            <p key={index}>{index+1}. - {item}</p>
            
          ))}
        
        </IngredContainer>
      </DetailPart>






    </DetailContainer>
    
  )
}

export default Details

