import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

import classes from './Auth.module.scss';

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event: FormEvent<HTMLFormElement>) => {
    //debugger
    event.preventDefault();
    dispatch(authActions.login());

  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={(e) => loginHandler(e)}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
