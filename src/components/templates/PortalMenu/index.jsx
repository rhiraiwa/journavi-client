import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const PortalMenu = () => {
  const cardItems = [
    {
      title: '旅行計画補助',
      description: '旅行の計画をサポートします',
      link: '/page1'
    },
    {
      title: '旅のしおり作成',
      description: '計画された旅行のしおりを作成します',
      link: '/Plan'
    },
    {
      title: 'しおり一覧',
      description: '過去に作成した旅のしおりを照会します',
      link: '/page3'
    }
  ];

  return (
    <div className="card-component">
      {cardItems.map((item, index) => (
        <div key={index} className="card">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-description">{item.description}</p>
          <Link to={item.link} className="card-link">Go to {item.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default PortalMenu;
