import { Navbar } from '../../components/Navbar/Navbar';
import { Profile } from './styles';
import { Background } from './styles';

export const MyProfile = () => {
  return (
    <>
    <Background>
      <Profile>
        <Navbar />
        <div>this is my profile page</div>
      </Profile>
    </Background>
    
    </>
  );
};
