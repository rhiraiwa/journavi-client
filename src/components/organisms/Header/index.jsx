import React from 'react';
import './index.scss';

const Header = () => {

  const userId = sessionStorage.getItem('userId');

  return (
    <header className="header">
      <div className="logo"><a href='/#/Portal'>Logo</a></div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href='/#/Plan'>NewPlan</a></li>
          <li className="nav-item"><a href='/#/PackingList'>PckingList</a></li>
        </ul>
      </nav>
      <div className='user'>
        <label>{`user:${userId}`}</label>
      </div>
    </header>
  );
};

export default Header;
