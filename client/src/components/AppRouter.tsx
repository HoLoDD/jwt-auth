import React, { useContext, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
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

  console.log(store.isAuth);
  

  return (
    <Routes>
    { store.isAuth 
    
    ? privateRoutes.map(({ element: Element, ...props }) => (
        <Route element={<Element />} {...props} />
      ))
    
    : publicRoutes.map(({ element: Element, ...props }) => (
        <Route element={<Element />} {...props} />
      ))
    }
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
    />
    </Routes>
  );
};

export default AppRouter;
