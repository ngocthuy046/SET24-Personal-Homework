import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Dùng để chuyển hướng trang
import axios from 'axios';

const Header = () => {
  const navigate = useNavigate();

    // Hàm xử lý logout
    const handleLogout = async () => {
        try {
            // Lấy token từ localStorage
            const token = localStorage.getItem('token');

            if (!token) {
                alert('You are not logged in!');
                return;
            }

            // Gửi yêu cầu logout tới backend
            const response = await axios.delete('http://127.0.0.1:3000/api/users/logout', {
                headers: {
                    Authorization: `Bearer ${token}`, // Gửi token qua header
                },
            });

            // Nếu logout thành công, xóa token ở client
            if (response.status === 200) {
                localStorage.removeItem('token'); // Xóa token
                alert(response.data.message); // Hiển thị thông báo logout thành công
                navigate('/login'); // Chuyển hướng về trang đăng nhập
            }
        } catch (error) {
            console.error('Logout failed:', error.response?.data || error.message);
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
          <p className="user-name">Welcome, Hello</p>
        </div>
        <button
          className="logout-button"
          aria-label="Logout"
          onClick={handleLogout}
        >
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
}

function TaskManager() {
  
}

export default function AdminPanel() {
  return (
    <div className="main-section">
      <Header />
      <TaskManager />
    </div>
  );
};
