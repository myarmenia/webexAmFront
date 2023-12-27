import React from 'react'
import './Services.css'
import ServicesItem from '../ServicesItem/ServicesItem'
import { servicesData } from '../../data'
import { useTranslation } from 'react-i18next'

function Services() {

  const {t, i18n} = useTranslation()
    
  return (
    <div className='services'>
        <div className='centre-div-border'>
        <div className='centre-div'>
            <h4>{t('servicesCentreDivTitle')}</h4>
           <div className="items">
           {
                servicesData.map((el, index) =>
                    <ServicesItem key={el._id} id = {el._id} title= {index} servicesLine = {el.servicesLine} color = {el.color}/>
                )
            }
           </div>
        </div>
        </div>
    </div>

  )
}

export default Services