import React from 'react'
import './OtherServices.css'
import { useTranslation } from 'react-i18next'
import { right_arrow_icon } from '../../iconFolder/icon'
import { useNavigate } from 'react-router-dom'

function OtherServices() {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const leng = localStorage.getItem('lang')
    const data = [
        {
            id: '1',
            title: t('otherServicesItemsTitles.0'),
            text: t('otherServicesItemsTexts.0'),
            route: '/mobile'
        },
        {
            id: '2',
            title: t('otherServicesItemsTitles.1'),
            text: t('otherServicesItemsTexts.1'),
            route: '/3d-modeling'
        },
        {
            id: '3',
            title: t('otherServicesItemsTitles.2'),
            text: t('otherServicesItemsTexts.2')
        },
        {
            id: '4',
            title: t('otherServicesItemsTitles.3'),
            text: t('otherServicesItemsTexts.3')
        },
        {
            id: '5',
            title: t('otherServicesItemsTitles.4'),
            text: t('otherServicesItemsTexts.4')
        }
    ]

    const handleNavigate = (route) => {
        navigate(`/${leng}${route}`)
        window.scrollTo(0, 0)
    }
    
  return (
    <div className='section_other_services'>
        <div className="container">
            <h2>{t('otherServicesTitle')}</h2>

            <div className="other_services_items">
                {
                    data.map(el => (
                        <div className="other_services_item" key={el.id}>
                            <h3>{el.title}</h3>
                            <p>{el.text}</p>
                            {el.route && <span className='other_services_item_icon' onClick={() => handleNavigate(el.route)}>{right_arrow_icon}</span>}
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default OtherServices