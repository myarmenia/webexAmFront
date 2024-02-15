import React from 'react'
import { useTranslation } from 'react-i18next';
import './CreateItemWebsitesAndMobileApp.css'
function CreateItemWebsitesAndMobileApp({id, txt, slide}) {
    const { t, i18n } = useTranslation();

  return (
    <div className='createItemWebsitesAndMobileApp' style={{display: slide == id ? 'block' : 'none' }}>
        <h4>{t('createWebsitesAndMobileAppTitle.'+ txt)}</h4>
        <p>{t('createWebsitesAndMobileAppTxt.' + txt)}</p>
    </div>
  )
}

export default CreateItemWebsitesAndMobileApp