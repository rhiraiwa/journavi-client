import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Header = () => {

  const userId = sessionStorage.getItem('userId');

  return (
    <header className="header">
      <div className="logo"><Link to='/Portal'>Logo</Link></div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to='/Plan'>NewPlan</Link>
          </li>
          <li className="nav-item">
            <Link to='/PackingList'>PackingList</Link>
          </li>
        </ul>
      </nav>
      <div className='user'>
        <label>{`user:${userId}`}</label>
      </div>
    </header>
  );
};

export default Header;
