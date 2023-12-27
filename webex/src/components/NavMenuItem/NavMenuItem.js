import React from 'react'
import './NavMenuItem.css'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
function NavMenuItem({index, path}) {
  const { t, i18n } = useTranslation();
  return (
      <li className='nav-menu-item'><NavLink className={({isActive})=> isActive ? 'active-item':''} to={path}>{t('navMenu.'+ index)}</NavLink></li>
  )
}

export default NavMenuItem