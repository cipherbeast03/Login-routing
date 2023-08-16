import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const initializeState = false;
const changeLoginStatus = (state = initializeState, action) => {
  switch (action.type) {
    case 'ISLOGGEDIN':
      return (state = true);
    case 'ISLOGGINGOUT':
      return (state = false);
    default:
      return state;
  }
};

export default changeLoginStatus;
