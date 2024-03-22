import styled from "styled-components";

const CardSSS = styled.div`
  background-color: aquamarine;
  border-radius: 15px;
  margin: 1rem 0;
  gap: 2rem;
  padding: 60px;
  display: flex;
  flex-direction: ${({ nida }) => nida};

  box-shadow: ${({ theme }) => theme.shadow};

  @media screen and (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
    background-color: pink;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

export default CardSSS;
