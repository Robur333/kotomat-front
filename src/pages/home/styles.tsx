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
  img {
    width: 250px;
    height: 250px;
    margin: 15px;
    border-radius: 10px;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 30px;
`;

export const SiteContainer = styled.div``;

export const SpinnerWrapper = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;
