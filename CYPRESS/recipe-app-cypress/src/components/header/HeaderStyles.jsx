import styled from "styled-components";

export const HeaderContainer = styled.div`
 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #00adb5;
`;
export const UserHeader = styled.h4`
  display: flex;
  font-size: 3rem;
  text-align: center;
  color: white;
  font-weight: bold;
  letter-spacing:5px;
  background: #00adb5;
  margin-top: 0;
  margin-bottom: 0;
  `
export const MainHeader = styled.h2`


  margin-top: 0;
  font-size: 3rem;
`;

export const FormContainer = styled.form`


  display: flex;

  flex-wrap: wrap;
 
  justify-content: center;
  border: 2px solid white;
  border-radius: 3px;
  margin: 20px;
`;

export const FoodInput = styled.input`

  height: 3rem;
  width: 15rem;
  border: none;
  border-radius: 3px;

  text-indent: 10px;

  margin: 5px;
  font-size: 2rem;
`;

export const Button = styled.button`

  background-color: #e1f1dd;
  padding: 5px;

  height: 3rem;
  border: none;
  margin: 5px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 2rem;
  &:hover {
    background-color: #00adb5;
    transition: all 0.3s ease-in;
    border: 1px solid white;
  }
`;

export const Select = styled.select`


  border-radius: 3px;
  margin: 5px;
  padding: 5px;
  height: 3rem;
  border: none;
  font-size: 2rem;
`;
