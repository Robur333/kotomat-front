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

  const [isThisCatFAvorite, setIsThisCatFavorite] = useState<string[]>();
  const [favorite, setFavorite] = useState<boolean>();
  useEffect(() => {
    apiCalls();
  }, []);
  const apiCalls = async () => {
    if (userId !== null) {
      const returnValue: string[] = await getUserFavoriteCats(userId);
      const filtered = returnValue.filter((element) => element === catId);
      const filtereddd: boolean =
        filtered.length == 1 && filtered.length != undefined ? true : false;
      setIsThisCatFavorite(filtered);
      setFavorite(filtereddd);
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
