import styled from "styled-components";

const ButtonSSS = styled.button`
  background-color: ${({ omer }) => (omer ? "#a62440" : "white")};
  border: ${({ kadir }) => (kadir ? `1px solid ${kadir}` : "none")};
  padding: 0.5rem 0.8rem;
  color: ${({ kadir }) => kadir || "white"};
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 5px;
  margin: 2rem 0.5rem;
  &:hover {
    opacity: 0.9;
    transform: scale(0.95);
  }
`;

export const DetailButton = styled(ButtonSSS)`
  color: tomato;
  background-color: white;
  border-radius: 20px 0;
  border-left: 3px solid blue;
`;

export default ButtonSSS;
