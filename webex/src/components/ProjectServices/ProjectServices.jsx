import React, { memo } from 'react'
import { web_project_services_data } from '../../data'
import './ProjectServices.css'
import { useTranslation } from 'react-i18next'

function ProjectServices({data, title}) {
    const {t} = useTranslation()
  return (
    <div className="web_project_services">
        <div className="container">
            <div className="web_project_services_titles_div">
                <h2>{t('web_projectPage_servicesTitles.0')}</h2>
                <p>{title}</p>
            </div>

            <div className="web_project_services_items">
                {
                    data.map(el => (
                        <div key={el.id} className='web_project_services_item'>
                            <img src={el.img} alt={el.name} loading='lazy'/>
                            <h3>{el.name}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default memo(ProjectServices)