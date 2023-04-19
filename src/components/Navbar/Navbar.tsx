import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <Link to="/HomePage">Home Page</Link>
      <Link to="/Login">Sign In</Link>

      <Link to="/Register">Sign Up</Link>
      <Link to="/RandomCat">Get Random Cat</Link>
      <Link to="/MyCats">My cats</Link>
      <Link to="/MyProfile">My Profile</Link>
    </div>
  );
};
