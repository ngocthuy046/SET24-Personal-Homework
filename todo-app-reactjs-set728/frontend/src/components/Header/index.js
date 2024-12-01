// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { logoutUser } from '../../_apis/userApi';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserName(user.name);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('You are not logged in!');
        return;
      }

      const data = await logoutUser(token);
      localStorage.removeItem('token')
      localStorage.removeItem('user'); 
      alert(data.message);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error.message);
      alert('Logout failed. Please try again!');
    }
  };

  return (
    <header className="header">
      <div className="user-information">
        <div className="user">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c6a2da0ed470c0d685115f59a09380b651780ed1c1e2895db906bf53a1d4f9e?apiKey=7a3c0c6db776404c888c5b6f6be62ebf&"
            alt="User avatar"
            className="user-avatar"
          />
          <p className="user-name">Welcome, {userName}</p>
        </div>
        <button className="logout-button" aria-label="Logout" onClick={handleLogout}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/afe2cbf71a0db6c57345383707991726983b9709c8f59f27ed25cee221643e12?apiKey=7a3c0c6db776404c888c5b6f6be62ebf&"
            alt="Logout icon"
            className="object-contain w-6 aspect-square"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
