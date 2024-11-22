import React from 'react'
import { checkIcon } from '../../iconFolder/icon'
import { useTranslation } from 'react-i18next';
import './VideoCoursesSectionCard.css'
import { useNavigate } from 'react-router-dom';

function VideoCoursesSectionCard({img, id, name, price}) {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const leng = localStorage.getItem('lang')
  return (
    <div className='video_courses_section_card'>
        <div className='video_courses_section_card_img_div'>
            <img src={img} alt="logo" />
            <h4>{name}</h4>
            <p>{price + '   ' + t('VideoCoursesSection_price') }</p>
        </div>

        <div className='video_courses_section_card_info'>
            <ul className='video_courses_section_card_info_ul'>
                <li>
                    <span>{checkIcon}</span>
                    <span>{t('button.3')}</span>
                </li>

                <li>
                    <span>{checkIcon}</span>
                    <span>{t('button.4')}</span>
                </li>

                <li>
                    <span>{checkIcon}</span>
                    <span>{t('videoCoursesSectionTitleCourses_month')}</span>
                </li>

                <li>
                    <span>{checkIcon}</span>
                    <span>{t('videoCoursesSectionTitleCourses_week')}</span>
                </li>
            </ul>

            <button className='video_courses_section_card_info_btn' onClick={() => navigate(`/${leng}/courses-registration`)}>{t('reg_log.1')}</button>
        </div>

    </div>
  )
}

export default  VideoCoursesSectionCard