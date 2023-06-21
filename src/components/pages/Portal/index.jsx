import React, { useState } from 'react';
import Header from '../../organisms/Header';
import './index.scss'
import PortalMenu from '../../templates/PortalMenu';

const Portal = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const TabContent1 = () => {
    return <div>タブ 1 のコンテンツ</div>;
  };

  const TabContent2 = () => {
    return <div>タブ 2 のコンテンツ</div>;
  };

  const TabContent3 = () => {
    return <div>タブ 3 のコンテンツ</div>;
  };

  const tabItems = [
    { title: 'Menu', content: <PortalMenu/> },
    { title: 'Schedule', content: <TabContent2 /> },
    { title: 'Package', content: <TabContent3 /> },
    { title: 'Tel', content: <TabContent3 /> },
  ];

  return (
    <>
      <Header/>
      <div id='portal'>
        {tabItems.map((item, index) => (
          <div
            key={index}
            className={`tab-item ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="page-body tab-content">
        {tabItems[activeTab].content}
      </div>
    </>
  );
};

export default Portal;
