import axios from 'axios';
import { useEffect, useState } from 'react';
import { getCatsData } from '../../shared/ApiCAlls';
import { PuffLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import { FavoriteButton } from '../../components/FavoriteButton';
import { Navbar } from '../../components/Navbar/Navbar';
import {
  CardWrapper,
  CardsContainer,
  SiteContainer,
  SpinnerWrapper,
} from './styles';
import { CatProperties } from '../../shared/types';

export const HomePage = (): JSX.Element => {
  const navigate = useNavigate();
  const redirectFunc = (catsId: string) => {
    navigate(`${catsId}`, { replace: false });
  };
  const [catsData, setCatsData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setCatsData(await getCatsData(1, 20));
  };
  console.log(catsData);
  const iteratedCatsCards = catsData.map((card: CatProperties) => {
    return (
      <>
        <CardWrapper id={card.id}>
          <FavoriteButton liked={false} catId={card.id} />
          <h3>{card.breeds[0].name}</h3>
          <img onClick={() => redirectFunc(card.id)} src={card.url} alt="" />
        </CardWrapper>
      </>
    );
  });

  return (
    <SiteContainer>
      <Navbar />
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
