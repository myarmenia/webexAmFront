import React from 'react'
import Button from '../Button/Button'
import './VideoCoursesSectionItem.css'
import { useTranslation } from 'react-i18next'

function VideoCoursesSectionItem({id, title, value, timeLine, icon, txt}) {
  const {t, i18n} = useTranslation()
  return (
    <div className='video-courses-section-item'>
        <div className='video-courses-section-item-info-div-1'>
            <h2>{'0' + id}</h2>
            <h5>{title}</h5>
            <span>{value}</span>
            <span> Տեվողությունը-{timeLine}</span>
        </div>
        <div className='video-courses-section-item-info-div-2'>
            <div>
            <span>{icon}</span>
            <p>{t('videoCoursesSectionTxt.' + txt)}</p>
            </div>
            
            <Button index="1"/>
        </div>
    </div>
  )
}

export default VideoCoursesSectionItem