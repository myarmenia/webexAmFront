import React from 'react'
import Carousel from 'react-multi-carousel'
import {coursesRegistrationSlideData, responsive } from '../../data'
import './CoursesRegistrationSlide.css'
import { useTranslation } from 'react-i18next';

function CoursesRegistrationSlide() {

    const { t, i18n } = useTranslation();

    const product = coursesRegistrationSlideData.map(el =>{

        return <div key={el._id} className='courses-registration-slide-item'>
            <div className='courses-registration-slide-item-top'>
                {el.icon}
                <h4>{el.title}</h4>
                <span>{t('courseseRegistrationSlideCountLine.' + '0')} {el.countline}  {t('courseseRegistrationSlideCountLine.' + '1')}</span>
            </div>
            <div className='courses-registration-slide-item-bootom'></div>
        </div>
    })

  return (
    <div className='courses-registration-slide'>
        <div className='container'>
        <div className='slide-section-items'>
            <Carousel showDots= {true}
             responsive={responsive}
             infinite = {true}
             autoPlay={true}
             autoPlaySpeed={2000}
             keyBoardControl = {true}
             containerClass='carousel-container'
             dotListClass='custom-dot-list-style'
             itemClass='carousel-item-padding-40-px'
             >
              {product}
            </Carousel>
        </div>
        </div>
    </div>
  )
}

export default CoursesRegistrationSlide