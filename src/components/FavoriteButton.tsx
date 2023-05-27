import { useState, useEffect, useContext } from 'react';
import {
  addCatToFavorite,
  deleteCatFromFavorite,
  getUserFavoriteCats,
} from '../shared/ApiCAlls';
import { UserContext } from '../shared/userContext';
import * as Icons from 'react-feather';

export const FavoriteButton = (catId: any): JSX.Element => {
  const { userId, setUserId } = useContext(UserContext);

  const [favorite, setFavorite] = useState<boolean>();
  useEffect(() => {
    apiCalls();
  }, []);
  const apiCalls = async () => {
    if (userId !== null) {
      const returnValue: string[] = await getUserFavoriteCats(userId);
      const filteredCats = returnValue.filter(
        (element) => element === catId.catId
      );
      const isCatFavorite: boolean =
        filteredCats.length == 1 && filteredCats.length != undefined
          ? true
          : false;
      setFavorite(isCatFavorite);
    }
  };
  const toggle = () => {
    if (userId === null) {
      alert('aby dodac kota do ulubionych najpierw się zaloguj');
    } else {
      favorite === false
        ? addCatToFavorite(catId.catId, userId)
        : deleteCatFromFavorite(catId.catId, userId);
      setFavorite(!favorite);
    }
  };

  return (
    <button onClick={toggle}>
      {favorite ? <Icons.Heart color="red" /> : <Icons.Heart />}
    </button>
  );
};
