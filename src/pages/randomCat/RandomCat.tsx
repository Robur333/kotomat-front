import { CatDetails } from '../CatDetails/CatDetails';
import { Random } from './styles';

export const RandomCat = (): JSX.Element => (
  <Random>
    <CatDetails isRandomCat={true} />
  </Random>
);
