import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const PortalMenu = () => {
  const cardItems = [
    {
      title: 'Card 1',
      description: 'This is the description for Card 1.',
      link: '/page1'
    },
    {
      title: 'Card 2',
      description: 'This is the description for Card 2.',
      link: '/page2'
    },
    {
      title: 'Card 3',
      description: 'This is the description for Card 3.',
      link: '/page3'
    },
    {
      title: 'Card 1',
      description: 'This is the description for Card 1.',
      link: '/page1'
    },
    {
      title: 'Card 2',
      description: 'This is the description for Card 2.',
      link: '/page2'
    },
    {
      title: 'Card 3',
      description: 'This is the description for Card 3.',
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
