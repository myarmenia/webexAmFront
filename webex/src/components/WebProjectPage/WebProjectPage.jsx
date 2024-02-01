import React from 'react'
import './WebProjectPage.css'
import KeyWordComponent from '../KeyWordComponent/KeyWordComponent'
import { useTranslation } from 'react-i18next'

function WebProjectPage() {

  const {t, i18n} = useTranslation()
  return (
    <div className='web-project-page'>
            <div className='web-project-page-top-div'>
                <div className='container'>
                    <h2>{t('web_project_page_top_div_title')}</h2>
                </div>
            </div>
                <KeyWordComponent/>

            <div className='container'>
               <div className='web-project-page-web-development-div'>
                  <h4>{t('web_project_page_web_development_title')}</h4>
                  <div className='web-project-page-web-development-div-info'>
                      <p>{t('web_project_page_web_development_info.0')}</p>
                      <p>{t('web_project_page_web_development_info.1')}</p>
                  </div>
               </div>
            </div>
    </div>
  )
}

export default WebProjectPage