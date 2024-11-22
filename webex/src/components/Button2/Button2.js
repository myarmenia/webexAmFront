import React from 'react'
import './Button2.css'
import { useTranslation } from 'react-i18next';
function Button2({index, setOpenOrderModal, route}) {
  const { t, i18n } = useTranslation();
  return (
    <a href={route && route} className='btn2' onClick={() => !route && setOpenOrderModal(true)} target='_blanc'>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    {t('button.'+ index)}
</a>
  )
}

export default Button2