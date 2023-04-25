import { useEffect, useState } from 'react';
import { getRandomCat, getSpecificCatData } from '../../shared/ApiCAlls';
import { Params, useParams } from 'react-router-dom';

import { CardWrapper, SpinnerWrapper } from '../Home/styles';
import { Rating } from '@mui/material';
import { PuffLoader } from 'react-spinners';
import { CatProperties } from '../../shared/types';
import { Navbar } from '../../components/Navbar/Navbar';
import { FavoriteButton } from '../../components/FavoriteButton';

export const CatDetails = (isRandomCat: boolean): JSX.Element => {
  const [catData, setCatData] = useState<CatProperties>();
  const param = useParams();

  useEffect(() => {
    console.log(param);
    //@ts-expect-error
    getData(param.id);
  }, [param]);

  const getData = async (param: Readonly<Params<string>>) => {
    const randomCat = await getRandomCat();
    console.log(isRandomCat);
    isRandomCat
      ? setCatData(randomCat[0])
      : setCatData(await getSpecificCatData(param));
  };
  console.log(catData);
  return (
    <>
      <Navbar />
      {catData === undefined ? (
        <SpinnerWrapper>
          <PuffLoader />
        </SpinnerWrapper>
      ) : (
        <>
          <FavoriteButton catId={catData.id} />

          <CardWrapper>
            <img src={catData.url} alt="" />
          </CardWrapper>

          <p>{catData.breeds[0].description}</p>

          <p>Adaptability</p>
          <Rating readOnly value={catData.breeds[0].adaptability}></Rating>
          <p>Affection Level</p>
          <Rating readOnly value={catData.breeds[0].affection_level}></Rating>
          <p>Child Friendly</p>
          <Rating readOnly value={catData.breeds[0].child_friendly}></Rating>
          <p>Dog Friendly</p>
          <Rating readOnly value={catData.breeds[0].dog_friendly}></Rating>
          <p>Energy Level</p>
          <Rating readOnly value={catData.breeds[0].energy_level}></Rating>

          <a target="_blank" href={catData.breeds[0].wikipedia_url}>
            {' '}
            Learn more about this cat{' '}
          </a>
        </>
      )}
    </>
  );
};
