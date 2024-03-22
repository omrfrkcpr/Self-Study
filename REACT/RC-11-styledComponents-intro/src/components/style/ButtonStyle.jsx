import styled from "styled-components";

const ButtonS = styled.button`
  color: ${({ saban }) => (saban ? "blue" : "red")};
  background-color: ${({ saban, elif }) =>
    saban ? "lightblue" : elif ? "lightorange" : "aqua"};
  width: 150px;
  padding: 0.5rem 1rem;
  border: none;
  margin: 0.5rem auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    transform: scale(0.95);
    opacity: 0.8;
  }
`;

export const YellowButtonS = styled(ButtonS)`
  color: ${({ asiye }) => (asiye ? "white" : "yellow")};
  background-color: ${({ asiye }) => (asiye ? "indianred" : "grey")};
  width: 180px;
  border-radius: 20px;
`;

export default ButtonS;
