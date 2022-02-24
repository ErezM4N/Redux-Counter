import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth';

import classes from './Header.module.scss';

const Header = () => {
  //debugger
  const dispatch = useDispatch();
  const logoutHandler = (event: any) => {
    event.preventDefault();
    dispatch(authActions.logout());
  };

  const isAuth = useSelector((state: any) => state.auth.isAuthentication);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={(e) => logoutHandler(e)}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
