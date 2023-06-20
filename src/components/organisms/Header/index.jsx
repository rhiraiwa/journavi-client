import React from 'react';
import './index.scss';

const Header = () => {

  const userId = sessionStorage.getItem('userId');

  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href='/'>Home</a></li>
        </ul>
      </nav>
      <div className='user'>
        <label>{`user:${userId}`}</label>
      </div>
    </header>
  );
};

export default Header;
