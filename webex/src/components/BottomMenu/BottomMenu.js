import React, { useState } from 'react';
import { homeIcon, orderIcon, videoIcon } from '../../iconFolder/icon';
import { NavLink } from 'react-router-dom';
import { elips } from '../../images/images';
import './BottomMenu.css'
import { useTranslation } from 'react-i18next';

const BottomMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { t, i18n } = useTranslation();

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="navigation">
      <ul>
        <li className={`list ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>
          <NavLink to="/">
            <span className="icon">
              {homeIcon}
            </span>
            <span className="text">{t('navMenu.' + '5')}</span>
          </NavLink>
        </li>
        <li className={`list ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleItemClick(1)}>
          <NavLink to="/programing">
            <span className="icon">
            {orderIcon}
            </span>
            <span className="text">{t('navMenu.' + '6')}</span>
          </NavLink>
        </li>
        <li className={`list ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleItemClick(2)}>
        <NavLink to="/courses-registration">
            <span className="icon">
            {videoIcon}
            </span>
            <span className="text">{t('navMenu.' + '0')}</span>
          </NavLink>
        </li>
        <div className="indicator">
            <span className='elips'>{elips}</span>
        </div>
      </ul>
    </div>
  );
};

export default BottomMenu;


