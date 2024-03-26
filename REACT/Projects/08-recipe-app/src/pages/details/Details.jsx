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
const Details = () => {
 

  return (
    
    <DetailContainer>
      <HeaderContainer>
        <h1> </h1>
        <img  alt="" />
      </HeaderContainer>

      <DetailPart>
        <OtherPart>
          <>Nutrients</>

          <p>
      
          </p>
          <p>
        
          </p>
          <p>
  
          </p>
          <p>
          
          </p>
          <p></p>
          <p>Calories: </p>
          {/* digest key i ile bize 29 elemanlı bir dizi geliyor, biz onun 4 elemanını bastırmak için slice kullandık */}
          <p>
           
          </p>
        </OtherPart>

        <ImgContainer>
          <img  alt="" />
        </ImgContainer>

        <IngredContainer>
        
        </IngredContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;
