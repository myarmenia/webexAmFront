import React from 'react'
import { VideoCoursesSectionData, packageTxts } from '../../data'
import SectionTitle from '../SectionTitle/SectionTitle'
import VideoCoursesSectionItem from '../VideoCoursesSectionItem/VideoCoursesSectionItem'
import './VideoCoursesSection.css'
import { logoImage } from '../../images/images'
import { useTranslation } from 'react-i18next'
function VideoCoursesSection() {
  const {t, i18n} = useTranslation()
  return (
    <div className='video-courses-section'>
                <div className='logo-and-title-div'>
                  <SectionTitle title={t('videoCoursesSectionTitle')}/>
                  {logoImage}
                </div>
        <div className="video-courses-section-items">
        {
            VideoCoursesSectionData.map((el, index) => {
              
              if (el.type === "free_package") {
                el.txt = packageTxts[el.type].txt
                el.value = packageTxts[el.type].value
                el._id = packageTxts[el.type]._id
                el.icon = packageTxts[el.type].icon
              }
              else if(el.type === "standart_package"){
                el.txt = packageTxts[el.type].txt
                el.value = packageTxts[el.type].value
                el._id = packageTxts[el.type]._id
                el.icon = packageTxts[el.type].icon
              }
              else if(el.type === "profesional_package"){
                el.txt = packageTxts[el.type].txt
                el.value = packageTxts[el.type].value
                el._id = packageTxts[el.type]._id
                el.icon = packageTxts[el.type].icon
              }
              
               return <VideoCoursesSectionItem key={el._id} id = {el._id} title = {el.title} value = {el.value} timeLine = {el.timeLine} icon = {el.icon} txt = {index}/>
            })
        }
        </div>
    </div>
  )
}

export default VideoCoursesSection