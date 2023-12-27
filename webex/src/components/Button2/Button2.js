import React from 'react'
import './Button2.css'
import { useTranslation } from 'react-i18next';
function Button2({index}) {
  const { t, i18n } = useTranslation();
  return (
    <a href="#" className='btn2'>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    {t('button.'+ index)}
</a>
  )
}

export default Button2