import React from 'react'
import { headerImg } from '../../images/images'
import './Header.css'
import Button from '../Button/Button'
import Button2 from '../Button2/Button2'
import { useTranslation } from 'react-i18next'

function Header() {
  const { t, i18n } = useTranslation();
  return (
    <div className='header'>
        <div className='header-title'>
            <h2>{t('headerTitlePart1')}</h2>
            <h4>{t('headerTitlePart2')}</h4>
            <div className='btns-div'>
              <Button index="1" path="/registr"/>
              <Button2 index="2"/>
            </div>
        </div>
        
        <img src={headerImg} />
    </div>
  )
}

export default Header