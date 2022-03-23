import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Context } from '../index';
import { privateRoutes, publicRoutes } from '../routes';

const AppRouter: FC = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
      console.log(store.isAuth);
    }
  }, [store]);

  return (
    <Routes>
    { /*store.isAuth && */ privateRoutes.map(({ element: Element, ...props }) => (
        <Route element={<Element />} {...props} />
      ))
    }

    { publicRoutes.map(({ element: Element, ...props }) => (
        <Route element={<Element />} {...props} />
      ))
    }
      <Route path='/' element={<h1>Main</h1>}/>
    <Route
      path="*"
      element={<Navigate to="/" replace />}
  />
    </Routes>
  );
};

export default observer(AppRouter);
