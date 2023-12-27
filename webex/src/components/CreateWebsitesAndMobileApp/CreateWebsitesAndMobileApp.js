import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import './CreateWebsitesAndMobileApp.css'
import { createWebAndMobileApp_data } from '../../data'
import CreateItemWebsitesAndMobileApp from '../CreateItemWebsitesAndMobileApp/CreateItemWebsitesAndMobileApp'
import { useTranslation } from 'react-i18next'
function CreateWebsitesAndMobileApp() {
  const {t, i18n} = useTranslation()
  return (
    <div className='create-website-mobile-app'>
        <SectionTitle title={t('createWebsitesAndMobileApp')}/>

        <div className='create-website-mobile-app-items'>
              {
                  createWebAndMobileApp_data.map((el, index )=>
                      <CreateItemWebsitesAndMobileApp key={el._id} id = {el._id} txt = {index}/>
                  )
              }
        </div>
    </div>
  )
}

export default CreateWebsitesAndMobileApp