import { useState, useEffect } from 'react';
import {
  addCatToFavorite,
  deleteCatFromFavorite,
  getUserFavoriteCats,
} from '../shared/ApiCAlls';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

interface favoriteButtonProps {
  catId: any;
  liked: boolean;
}

export const FavoriteButton = ({
  catId,
  liked,
}: favoriteButtonProps): JSX.Element => {
  const [isThisCatFAvorite, setIsThisCatFavorite] = useState<string[]>();
  const [favorite, setFavorite] = useState<boolean>();
  useEffect(() => {
    apiCalls();
  }, []);
  const apiCalls = async () => {
    const returnValue: string[] = await getUserFavoriteCats();
    const filtered = returnValue.filter((element) => element === catId);
    const filtereddd: boolean =
      filtered.length == 1 && filtered.length != undefined ? true : false;
    setIsThisCatFavorite(filtered);
    setFavorite(filtereddd);
  };
  console.log(isThisCatFAvorite);
  console.log(favorite);
  const toggle = () => {
    favorite === false ? addCatToFavorite(catId) : deleteCatFromFavorite(catId);
    setFavorite(!favorite);
  };

  return (
    <button onClick={toggle}>
      {favorite ? <Favorite /> : <FavoriteBorder />}
    </button>
  );
};
