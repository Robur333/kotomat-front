import { Navbar } from '../../components/Navbar/Navbar';
import { CatDetails } from '../CatDetails/CatDetails';
import { Random } from './styles';
import { Background, } from '../MyProfile/styles';
import {
    SiteNavbar,
  } from './styles';

export const RandomCat = (): JSX.Element => (
    <Background>
        <Random>
            <CatDetails isRandomCat={true} />
        </Random>
    </Background>
);

