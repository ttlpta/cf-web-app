import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function Layout({ children }) {
  const { signOut } = useAuth();

  const onSignOut = () => {
    signOut();
    window.location.reload();
  };

  return (
    <div>
      <fieldset>
        <legend>Header</legend>
        <ul>
          <li>
            {' '}
            <Link to="/">Home</Link>
          </li>
          <li>
            {' '}
            <Link to="/profile">Profile</Link>
          </li>

          <li>
            <button onClick={onSignOut} type="button">Sign Out</button>
          </li>
        </ul>
      </fieldset>
      <br />
      <br />
      <fieldset>
        <legend>Body</legend>
        <div>{children}</div>
      </fieldset>
      <br />
      <br />
      <fieldset>
        <legend>Footer</legend>
        <div>Footer</div>
      </fieldset>
    </div>
  );
}
