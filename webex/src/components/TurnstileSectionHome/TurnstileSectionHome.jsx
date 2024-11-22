import React from 'react'
import './TurnstileSectionHome.css'
import { turnstileDataHome } from '../../data'
import TurnstileItem from '../TurnstilePage/TurnstileItem/TurnstileItem'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button';

function TurnstileSectionHome() {
    const {t, i18n} = useTranslation()
    const navigate = useNavigate()
    const leng = localStorage.getItem('lang') 

  return (
    <div className='turnstile_section_home'>
        <div className="container">
           <h1 className='turnstile_section_home_title'>{t('turnstileTitle')}</h1>
           <div className='turnstile_section_home_items_block'>
                <div className="turnstile_section_home_items">
                    {
                            turnstileDataHome.map(item => (
                                <TurnstileItem key={item.id} item={item} />
                            ))
                        }
                </div>

                {/* <button className='turnstile_section_home_btn' onClick={handleNavigate}>{t('button.10')}</button> */}
                <Button index='10' path={`/${leng}/turnstile`} />

           </div>
        </div>
    </div>
  )
}

export default TurnstileSectionHome