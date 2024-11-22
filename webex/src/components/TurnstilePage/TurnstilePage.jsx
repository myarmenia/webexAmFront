import React from 'react'
import './TurnstilePage.css'
import { turnstileData, turnstileVideosData } from '../../data'
import { turnstileIcon1, turnstileIcon2 } from '../../iconFolder/icon'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import TurnstileItem from './TurnstileItem/TurnstileItem'
import ReactPlayer from 'react-player'

function TurnstilePage() {
    const { t, i18n } = useTranslation()

    return (
        <div className='turnstile_page'>
            <div  className="container">
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

                <div className='turnstile_page_videos'>
                    <h1>{t('turnstile_videos_section_title')}</h1>
                    <div className='turnstile_videos_block'>
                        {turnstileVideosData.map((item, index) => (
                            <div key={item.id} className="turnstile_video_item">
                                <ReactPlayer url={item.video} controls />
                                <p>{t('turnstile_videos_titles.' + index)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TurnstilePage