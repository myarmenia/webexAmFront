import React from 'react'
import { useTranslation } from 'react-i18next';
import './RegistreButton.css'
import { NavLink } from 'react-router-dom';
function RegistreButton({path}) {
    const { t, i18n } = useTranslation();
  return (
    <NavLink to={path}>{t('reg_log.'+ '1')}</NavLink>
    
  )
}

export default RegistreButton