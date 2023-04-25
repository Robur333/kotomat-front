import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../shared/userContext';

export const Navbar = () => {
  const { userId, setUserId } = useContext(UserContext);

  return (
    <>
      {userId === null ? (
        <div>
          <Link to="/HomePage">Home Page</Link>
          <Link to="/Login">Sign In</Link>

          <Link to="/Register">Sign Up</Link>
          <Link to="/RandomCat">Get Random Cat</Link>
          <Link to="/MyCats">My cats</Link>
          <Link to="/MyProfile">My Profile</Link>
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
    </>
  );
};
