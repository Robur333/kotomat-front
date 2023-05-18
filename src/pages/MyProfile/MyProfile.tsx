import { jsx } from '@emotion/react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Profile } from './styles';

export const MyProfile = (): JSX.Element => {
  return (
    <Profile>
      <Navbar />
      <div>this is my profile page</div>
    </Profile>
  );
};
