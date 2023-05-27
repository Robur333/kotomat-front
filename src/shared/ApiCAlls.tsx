import axios from 'axios';
import { Params } from 'react-router-dom';

export const loginRequest = async (
  email: string,
  password: string
): Promise<any> => {
  let returnValue;
  await axios
    .post(`http://localhost:8080/api/login?password=${password}&email=${email}`)
    .then((response) => {
      returnValue = response.data;
    });
  console.log(returnValue);
  return returnValue;
};

export const getRandomCat = async (): Promise<any> => {
  let returnValue;
  await axios
    .get(
      `https://api.thecatapi.com/v1/images/search?&has_breeds=1&api_key=live_dhNqwjUOLxD2FBilcve0IIU9nXxldpgLEJM9nbqTbgH4PouiYbs2b689WdMIpcsx`
    )
    .then((response) => (returnValue = response.data));

  return returnValue;
};

export const getCatsData = async (
  page: number,
  limit: number
): Promise<any> => {
  let returnValue;
  await axios
    .get(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&has_breeds=1&api_key=live_dhNqwjUOLxD2FBilcve0IIU9nXxldpgLEJM9nbqTbgH4PouiYbs2b689WdMIpcsx`
    )
    .then((response) => (returnValue = response.data));

  return returnValue;
};

export const getSpecificCatData = async (
  catId: Readonly<Params<string> | string>
): Promise<any> => {
  let returnValue;
  await axios
    .get(`https://api.thecatapi.com/v1/images/${catId}`)
    .then((response) => (returnValue = response.data));

  return returnValue;
};

export const addCatToFavorite = async (
  catId: string,
  userId: string
): Promise<any> => {
  let returnValue;
  await axios
    .post(
      `http://localhost:8080/api/addFavorite?catId=${catId}&userId=${userId}`
    )
    .then((response) => (returnValue = response.data));

  return returnValue;
};

export const deleteCatFromFavorite = async (
  catId: Readonly<Params<string>> | string,
  userId: string
): Promise<any> => {
  let returnValue;
  await axios
    .post(
      `http://localhost:8080/api/removeFavorite?catId=${catId}&userId=${userId}`
    )
    .then((response) => (returnValue = response));

  return returnValue;
};

export const getUserFavoriteCats = async (userId: string): Promise<any> => {
  let returnValue;
  await axios
    .get(`http://localhost:8080/api/favoriteCats?userId=${userId}`)
    .then((response) => (returnValue = response.data));

  return returnValue;
};
