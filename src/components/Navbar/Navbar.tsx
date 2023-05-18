import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../shared/userContext';
import { SiteNavbar } from './styles';

export const Navbar = () => {
  const { userId, setUserId } = useContext(UserContext);

  return (
    <>
      <SiteNavbar>
        {userId === null ? (
          <div>
            <Link to="/HomePage">Home Page</Link>
            <Link to="/RandomCat">Get Random Cat</Link>
            <Link to="/MyCats">My cats</Link>
            <Link to="/Login">
              <button>Sign In</button>{' '}
            </Link>
            <Link to="/Register">
              <button>Sign Up</button>{' '}
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/HomePage">Home Page</Link>
            <Link to="/RandomCat">Get Random Cat</Link>
            <Link to="/MyCats">My cats</Link>
            <Link to="/MyProfile">My Profile</Link>
            <button onClick={() => setUserId(null)}>Log Out</button>
          </div>
        )}
      </SiteNavbar>
    </>
  );
};
