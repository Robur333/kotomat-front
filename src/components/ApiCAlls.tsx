import axios from 'axios';

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

export const getCatsData = async (page: number): Promise<any> => {
  let returnValue;
  await axios
    .get(
      `https://api.thecatapi.com/v1/images/search?limit=20&page=${page}&has_breeds=1&api_key=live_dhNqwjUOLxD2FBilcve0IIU9nXxldpgLEJM9nbqTbgH4PouiYbs2b689WdMIpcsx`
    )
    .then((response) => (returnValue = response.data));

  return returnValue;
};
