import React from 'react'
import './OurAdvantagesItem.css'
import { useTranslation } from 'react-i18next'

function OurAdvantagesItem({id, title, txt, color, botomDivColor}) {
  const {t, i18n} = useTranslation()
  return (
    <div className='OurAdvantagesItem' style={{backgroundColor: color}}>
        <h4>{t('ourAdvantagesItemTitle.' + title)}</h4>
        <p>{t('ourAdvantagesItemTxt.' + txt)}</p>
        <div className='bottom-div' style={{backgroundColor: botomDivColor}}></div>
    </div>
  )
}

export default OurAdvantagesItem