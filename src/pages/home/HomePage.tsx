import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  CardWrapper,
  CardsContainer,
  SiteContainer,
  SpinnerWrapper,
} from './styles';
import { getCatsData } from '../../components/ApiCAlls';
import { PuffLoader } from 'react-spinners';

interface CatProperties {
  id: string;
  url: string;
  breeds: [
    {
      description: string;
      id: string;
      name: string;
    }
  ];
}

export const HomePage = () => {
  const [catsData, setCatsData] = useState([]);

  useEffect(() => {
    getData();
    console.log('dafsa');
  }, []);

  const getData = async () => {
    setCatsData(await getCatsData(2));
  };
  console.log(catsData);
  const iteratedCatsCards = catsData.map((card: CatProperties) => {
    return (
      <CardWrapper id={card.id}>
        <h3>{card.breeds[0].name}</h3>
        <img src={card.url} alt="" />
      </CardWrapper>
    );
  });

  return (
    <SiteContainer>
      <p>Kotomat Main Page</p>
      {catsData[0] === undefined ? (
        <SpinnerWrapper>
          <PuffLoader color="#36d7b7" />
        </SpinnerWrapper>
      ) : (
        <CardsContainer>{iteratedCatsCards}</CardsContainer>
      )}
    </SiteContainer>
  );
};
