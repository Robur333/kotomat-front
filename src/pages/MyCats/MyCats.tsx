import { useContext, useEffect, useState } from 'react';
import {
  deleteCatFromFavorite,
  getSpecificCatData,
  getUserFavoriteCats,
} from '../../shared/ApiCAlls';
import { CatProperties } from '../../shared/types';
import { Navbar } from '../../components/Navbar/Navbar';
import { CardWrapper, CardsContainer } from '../Home/styles';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { UserContext } from '../../shared/userContext';
import { Liked } from './styles';
import * as Icons from 'react-feather';

interface favoriteButtonProps {
  catId: string;
  onClick?: () => void;
}

export const MyCats = (): JSX.Element => {
  const [favoriteCatsIds, setFavoriteCatsIds] = useState<string[]>([]);
  const [favoriteCatsData, setFavoriteCatsData] = useState<CatProperties[]>([]);
  const navigate: NavigateFunction = useNavigate();
  const redirectFunc = (catsId: string) => {
    navigate(`/HomePage/${catsId}`, { replace: true });
  };

  const { userId, setUserId } = useContext(UserContext);
  useEffect(() => {
    apiCalls();
  }, []);

  useEffect(() => {
    getFavoriteCatsData();
  }, [favoriteCatsIds]);

  const reloadCats = (catId: string) => {
    const filteredCats: CatProperties[] = favoriteCatsData.filter(
      (cat) => cat.id !== catId
    );
    setFavoriteCatsData(filteredCats);
  };

  const getFavoriteCatsData = () => {
    favoriteCatsIds.forEach(async (id: string) => {
      const catData: CatProperties = await getSpecificCatData(id);
      setFavoriteCatsData((prevState) => {
        return [...prevState, catData];
      });
    });
  };
  const apiCalls: () => Promise<void> = async () => {
    await setFavoriteCatsIds(await getUserFavoriteCats('402'));
  };

  const FavoriteButton = ({ catId }: favoriteButtonProps): JSX.Element => {
    const [favorite, setFavorite] = useState(true);
    const toggle = () => {
      deleteCatFromFavorite(catId, userId);
      setFavorite(!favorite);
      reloadCats(catId);
    };
    console.log(favorite);
    return <button onClick={toggle}>{<Icons.Heart color="red" />}</button>;
  };

  const iteratedCats: JSX.Element[] = favoriteCatsData.map((cat) => {
    return (
      <CardWrapper>
        <FavoriteButton catId={cat.id} />
        <p>{cat.breeds[0].name}</p>

        <img src={cat.url} onClick={() => redirectFunc(cat.id)} alt="" />
      </CardWrapper>
    );
  });
  return (
    <>
      <Navbar />
      {userId === null ? (
        <Liked>
          You need to <Link to={'/Login'}> Sign In </Link> to see your favorite
          cats
        </Liked>
      ) : (
        <CardsContainer>{iteratedCats}</CardsContainer>
      )}
    </>
  );
};
