import React from 'react'
import {programingLengImg, responsive, slideData } from '../../data'
import SlideSectionItem from '../SlideSectionItem/SlideSectionItem'
import "react-multi-carousel/lib/styles.css";
import './SlideSection.css'

import Carousel from 'react-multi-carousel';
import { useSelector } from 'react-redux';
import { selectProgramingLang } from '../../store/slices/HomePageSlice/HomePageSlice';
import { useTranslation } from 'react-i18next';

function SlideSection() {

  const {t, i18n} = useTranslation()

  const programingLang = useSelector(selectProgramingLang)
  const product = 
  programingLang.map(el => {
        el = {
          ...el,
          img: programingLengImg
        }
      
     return <SlideSectionItem key={el.id}
              id = {el.id}
              title = {el.name}
              txt = {el.description}
              img = {el.img} 
              icon = {el.logo}/>
    }

    )
  

  return (
    <div className='slide-section'>

      <h2>{t('slide_section.0')}</h2>
      <p>{t('slide_section.1')}</p>
        
        <div className='slide-section-items'>
            <Carousel className='jj' showDots= {true}
             responsive={responsive}
             infinite = {true}
             autoPlay={true}
             autoPlaySpeed={4000}
             keyBoardControl = {true}
             containerClass='carousel-container'
             dotListClass='custom-dot-list-style'
             itemClass='carousel-item-padding-40-px'
             >
              {product}
            </Carousel>
        </div>
    </div>
  )
}

export default SlideSection

