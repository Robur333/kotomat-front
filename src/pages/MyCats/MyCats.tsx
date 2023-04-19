import { useEffect, useState } from 'react';
import {
  deleteCatFromFavorite,
  getSpecificCatData,
  getUserFavoriteCats,
} from '../../shared/ApiCAlls';
import { CatProperties } from '../../shared/types';
import { Navbar } from '../../components/Navbar/Navbar';
import { CardWrapper, CardsContainer } from '../Home/styles';
import { useNavigate } from 'react-router-dom';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

interface favoriteButtonProps {
  catId: string;
  onClick?: () => void;
}

export const MyCats = (): JSX.Element => {
  const [favoriteCatsIds, setFavoriteCatsIds] = useState<string[]>([]);
  const [favoriteCatsData, setFavoriteCatsData] = useState<CatProperties[]>([]);
  const navigate = useNavigate();
  const redirectFunc = (catsId: string) => {
    navigate(`/HomePage/${catsId}`, { replace: true });
  };
  useEffect(() => {
    apiCalls();
  }, []);

  useEffect(() => {
    getFavoriteCatsData();
  }, [favoriteCatsIds]);

  const reloadCats = (catId: string) => {
    console.log('clicked');
    const filteredCats = favoriteCatsData.filter((cat) => cat.id !== catId);
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
  console.log(favoriteCatsData);
  const apiCalls = async () => {
    await setFavoriteCatsIds(await getUserFavoriteCats());
  };

  const FavoriteButton = ({ catId }: favoriteButtonProps): JSX.Element => {
    const [favorite, setFavorite] = useState(true);
    const toggle = () => {
      deleteCatFromFavorite(catId);
      setFavorite(!favorite);
      reloadCats(catId);
    };
    console.log(favorite);
    return <button onClick={toggle}>{<Favorite />}</button>;
  };

  const iteratedCats: JSX.Element[] = favoriteCatsData.map((cat) => {
    return (
      <CardWrapper>
        <FavoriteButton catId={cat.id} />

        <img src={cat.url} onClick={() => redirectFunc(cat.id)} alt="" />
        <p>{cat.breeds[0].name}</p>
      </CardWrapper>
    );
  });
  return (
    <>
      <Navbar />
      <CardsContainer>{iteratedCats}</CardsContainer>
    </>
  );
};
