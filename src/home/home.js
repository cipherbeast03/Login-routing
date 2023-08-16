// HomePage.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, NavLink, Route, Routes } from 'react-router-dom';
import { isLoggedIn, isLoggingOut } from '../Actions/index';
import ProfilePage from '../profile/profile';
import Navbar from '../Nav/nav';
import PrivateRoutes from '../Routers/PrivateRoutes';

import './home.css';

const HomePage = () => {
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        <h1>Welcome to My Website</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
