import styled from "styled-components";

const ImageSSS = styled.img`
  width: 300px;
  height: 300px;
  border: 2px solid red;
  margin: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.responsive}) {
    width: 80%;
    height: 80%;
  }
`;

export const LogoSSS = styled.img`
  background-color: orange;
  width: 300px;
  padding: 2rem 1rem;
`;

export default ImageSSS;
