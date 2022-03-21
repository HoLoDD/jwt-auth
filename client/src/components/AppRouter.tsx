import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Context } from '../index';
import { privateRoutes, publicRoutes } from '../routes';
import Loader from './loader';

const AppRouter = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, [store]);

  if (store.isLoading) {
    return <Loader />;
  }

  return (
    store.isAuth ?
    <Routes>
      {privateRoutes.map(({ element: Element, ...props }) => (
        <Route element={<Element />} {...props} />
      ))}
    </Routes>
    :
    <Routes>
      {publicRoutes.map(({ element: Element, ...props }) => (
        <Route element={<Element />} {...props} />
      ))}
    </Routes>
  );
};

export default AppRouter;
