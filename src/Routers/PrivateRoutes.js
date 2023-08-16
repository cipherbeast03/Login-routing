import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import store from '../store';

const PrivateRoutes = () => {
  const currentState = store.getState();
  // console.log(loginstate);
  return currentState ? (
    <>
      <Outlet />
    </>
  ) : (
    <div>
      <Navigate to="/" />
    </div>
  );
};
export default PrivateRoutes;
