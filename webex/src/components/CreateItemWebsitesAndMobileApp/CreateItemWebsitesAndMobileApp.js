import React from 'react'
import { useTranslation } from 'react-i18next';
import './CreateItemWebsitesAndMobileApp.css'
function CreateItemWebsitesAndMobileApp({txt}) {
    const { t, i18n } = useTranslation();
  return (
    <div className='createItemWebsitesAndMobileApp'>
        <h4>{t('createWebsitesAndMobileAppTitle.'+ txt)}</h4>
        <p>{t('createWebsitesAndMobileAppTxt.' + txt)}</p>
    </div>
  )
}

export default CreateItemWebsitesAndMobileApp