import React from 'react'
import './ServicesItem.css'
import { useTranslation } from 'react-i18next'
function ServicesItem({id, title, servicesLine, color}) {
  const {t, i18n} = useTranslation()
  return (
      <div  className='item-div' style={{backgroundColor: color, boxShadow: '0 0 10px' + color}}>
                <div className='item'>
                    <span>{t('servicesTitle.'+ title)}</span>
                </div>
                {servicesLine}
      </div> 


  )
}

export default ServicesItem