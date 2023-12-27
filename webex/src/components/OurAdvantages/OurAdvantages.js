import React from 'react'
import './OurAdvantages.css'
import OurAdvantagesItem from '../OurAdvantagesItem/OurAdvantagesItem'
import SectionTitle from '../SectionTitle/SectionTitle'
import { ourAdvantagesData } from '../../data'
import { useTranslation } from 'react-i18next'

function OurAdvantages() {
  const {t, i18n} = useTranslation()
  return (
    <div className='our-advantages'>
        <SectionTitle title = {t('ourAdvantagesTitle')}/>

        <div className='our-advantages-items'>

        {
            ourAdvantagesData.map((el, index) =>
                
                    <OurAdvantagesItem key={el._id} title= {index} txt = {index} id = {el._id} color = {el.color} botomDivColor = {el.botomDivColor}/>
            )
        }
        </div>
    </div>
  )
}

export default OurAdvantages