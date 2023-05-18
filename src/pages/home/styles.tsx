import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  max-width: 300px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  background-color: white;
  color: black;
  border-radius: 15px;
  padding: 10px;
  transition: 0.3s;
  box-shadow: 0px 3px 15px -3px #3e3e3e;

  :hover {
    box-shadow: 0px 3px 28px -3px #3e3e3e;
  }

  img {
    width: 250px;
    height: 200px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
