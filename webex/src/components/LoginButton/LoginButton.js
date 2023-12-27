import React from 'react'
import { useTranslation } from 'react-i18next';
import './LoginButton.css'
import { NavLink } from 'react-router-dom';

function LoginButton({path}) {
    const { t, i18n } = useTranslation();
  return (
    <NavLink to={path}>{t('reg_log.'+ '0')}</NavLink>
  )
}

export default LoginButton