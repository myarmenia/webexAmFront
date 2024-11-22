import React from 'react'
import './DevelopmenCoursesPageOurAdvantages.css'
import { dev_courses_our_adv_icon1, dev_courses_our_adv_icon2, dev_courses_our_adv_icon3, dev_courses_our_adv_icon4, dev_courses_our_adv_icon5, dev_courses_our_adv_icon6, dev_courses_our_adv_icon7, dev_courses_our_adv_icon8 } from '../../../iconFolder/icon'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
function DevelopmenCoursesPageOurAdvantages() {
   const leng = localStorage.getItem('lang') != null ? localStorage.getItem('lang') : 'am';
    const {t} = useTranslation()
    const navigate = useNavigate()


    const developmen_courses_page_our_advantages_data = [
        {
            id: '1',
            icon: dev_courses_our_adv_icon1,
            title: t('development_page_our_advantages_titles.0'),
            txt: t('development_page_our_advantages_texts.0')
        },

        {
            id: '2',
            icon: dev_courses_our_adv_icon2,
            title: t('development_page_our_advantages_titles.1'),
            txt: t('development_page_our_advantages_texts.1')
        },

        {
            id: '3',
            icon: dev_courses_our_adv_icon3,
            title: t('development_page_our_advantages_titles.2'),
            txt: t('development_page_our_advantages_texts.2')
        },

        {
            id: '4',
            icon: dev_courses_our_adv_icon4,
            title: t('development_page_our_advantages_titles.3'),
            txt: t('development_page_our_advantages_texts.3')
        },

        {
            id: '5',
            icon: dev_courses_our_adv_icon5,
            title: t('development_page_our_advantages_titles.4'),
            txt: t('development_page_our_advantages_texts.4')
        },

        {
            id: '6',
            icon: dev_courses_our_adv_icon6,
            title: t('development_page_our_advantages_titles.5'),
            txt: t('development_page_our_advantages_texts.5')
        },

        {
            id: '7',
            icon: dev_courses_our_adv_icon7,
            title: t('development_page_our_advantages_titles.6'),
            txt: t('development_page_our_advantages_texts.6')
        },

        {
            id: '8',
            icon: dev_courses_our_adv_icon8,
            title: t('development_page_our_advantages_titles.7'),
            txt: t('development_page_our_advantages_texts.7')
        },

    ]
    
  return (
    <div className='developmen_courses_page_our_advantages'>
        <h2>{t('ourAdvantagesTitle')}</h2>
        <div className='developmen_courses_page_our_advantages_block'>
             <div className="container">
                {
                    developmen_courses_page_our_advantages_data.map(el => (
                        <div key={el.id} className='developmen_courses_page_our_advantages_item'>
                            <span>{el.icon}</span>
                            <div className='developmen_courses_page_our_advantages_item_info'>
                                <h3>{el.title}</h3>
                                <p>{el.txt}</p>
                            </div>
                        </div>
                    ))
                }

             </div>

             <button className='developmen_courses_page_our_advantages_btn' onClick={() => navigate(`/${leng}/registr`)}>{t('button.1')}</button>
        </div>

    </div>
  )
}

export default DevelopmenCoursesPageOurAdvantages