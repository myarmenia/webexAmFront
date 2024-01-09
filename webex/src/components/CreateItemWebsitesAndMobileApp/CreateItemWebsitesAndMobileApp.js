import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import './CreateItemWebsitesAndMobileApp.css'
function CreateItemWebsitesAndMobileApp({txt}) {
    const { t, i18n } = useTranslation();
    const [viewTxt, setviewTxt] = useState(false)

    useEffect(()=>{
      window.addEventListener('scroll', (e)=>{
      if (window.scrollY >= 4650) {
        setviewTxt(true)
      }
      else{
        setviewTxt(false)
      }
      })
    },[])
  return (
    <div className='createItemWebsitesAndMobileApp'>
        <h4>{t('createWebsitesAndMobileAppTitle.'+ txt)}</h4>
        <p style={{transform: viewTxt ? 'rotateX(0)' : 'rotateX(90deg)'}}>{t('createWebsitesAndMobileAppTxt.' + txt)}</p>
    </div>
  )
}

export default CreateItemWebsitesAndMobileApp