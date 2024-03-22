import styled from "styled-components";

const DisplaySSS = styled.div`
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default DisplaySSS;
