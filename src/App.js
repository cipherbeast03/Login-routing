import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

import LoginPage from './login/login';
import ProfilePage from './profile/profile';
import HomePage from './home/home';

import PrivateRoutes from './Routers/PrivateRoutes';

import './style.css';

export default function App() {
  return (
    <div>
      <h1>Login Routing</h1>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}
