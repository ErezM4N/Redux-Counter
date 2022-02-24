import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';



function App() {
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
