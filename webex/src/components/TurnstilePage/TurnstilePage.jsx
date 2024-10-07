import React from 'react'
import './TurnstilePage.css'
import { turnstileData } from '../../data'
import { turnstileIcon1, turnstileIcon2 } from '../../iconFolder/icon'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import TurnstileItem from './TurnstileItem/TurnstileItem'

function TurnstilePage() {
    const {t, i18n} = useTranslation()

    return (
        <div className='turnstile_page'>
            <div className="container">
                <h1 className='turnstile_page_title'>{t('turnstileTitle')}</h1>

                <div className='turnstile_page_info'>
                    <h3>{t('turnstileInfoTitle')} </h3>

                    <div className='turnstile_page_info_list'>
                        <p className='turnstile_page_info_list_item'>• {t('turnstileInfo.0')}</p>
                        <p className='turnstile_page_info_list_item'>• {t('turnstileInfo.1')}</p>
                        <p className='turnstile_page_info_list_item'>• {t('turnstileInfo.2')}</p>
                        <p className='turnstile_page_info_list_item'>• {t('turnstileInfo.3')}</p>
                        <p className='turnstile_page_info_list_item'>• {t('turnstileInfo.4')} </p>
                    </div>
                </div>


                <div className='turnstile_page_items_block'>
                    <div className="container">
                        <div className='turnstile_page_items'>
                            {
                                turnstileData.map(el => (
                                    <TurnstileItem key={el.id} item={el} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TurnstilePage