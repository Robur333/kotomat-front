import { useEffect, useState } from 'react';
import { getCatsData } from '../../shared/ApiCAlls';
import { PuffLoader } from 'react-spinners';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { FavoriteButton } from '../../components/FavoriteButton';
import { Navbar } from '../../components/Navbar/Navbar';
import {
  CardWrapper,
  CardsContainer,
  MoreCatsBtn,
  SiteContainer,
  SpinnerWrapper,
} from './styles';
import { CatProperties } from '../../shared/types';

export const HomePage = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const redirectFunc = (catsId: string) => {
    navigate(`${catsId}`, { replace: false });
  };
  const [catsData, setCatsData] = useState<CatProperties[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getMoreCats: () => Promise<void> = async () => {
    setLoading(true);
    const moreCats: CatProperties[] = await getCatsData(1, 20);
    setCatsData((prevState) => [...prevState, ...moreCats]);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  const getData: () => Promise<void> = async () => {
    setCatsData(await getCatsData(1, 20));
  };
  const iteratedCatsCards: JSX.Element[] = catsData.map(
    (card: CatProperties) => {
      return (
        <CardWrapper id={card.id}>
          <FavoriteButton catId={card.id} />
          <h3>{card.breeds[0].name}</h3>
          <img onClick={() => redirectFunc(card.id)} src={card.url} alt="" />
        </CardWrapper>
      );
    }
  );

  return (
    <>
      <Navbar />
      {catsData[0] === undefined ? (
        <SpinnerWrapper>
          <PuffLoader color="brown" />
        </SpinnerWrapper>
      ) : (
        <SiteContainer>
          <CardsContainer>{iteratedCatsCards} </CardsContainer>
          {loading ? (
            <SpinnerWrapper>
              <PuffLoader color="brown" />
            </SpinnerWrapper>
          ) : (
            <MoreCatsBtn onClick={() => getMoreCats()}>
              Get More Cats!
            </MoreCatsBtn>
          )}
        </SiteContainer>
      )}
    </>
  );
};
