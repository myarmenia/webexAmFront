import React from 'react'
import {programingLengImg, responsive, slideData } from '../../data'
import SlideSectionItem from '../SlideSectionItem/SlideSectionItem'
import "react-multi-carousel/lib/styles.css";
import './SlideSection.css'

import Carousel from 'react-multi-carousel';
import { useSelector } from 'react-redux';
import { selectProgramingLang } from '../../store/slices/HomePageSlice/HomePageSlice';

function SlideSection() {

  const programingLang = useSelector(selectProgramingLang)

  const product = 
  slideData.map(el => {
        el = {
          ...el,
          img: programingLengImg
        }
      
     return <SlideSectionItem key={el._id}
              id = {el._id}
              title = {el.title}
              timeLine = {el.timeLine} 
              txt = {el.txt}
              img = {el.img} 
              icon = {el.icon}/>
    }

    )
  

  return (
    <div className='slide-section'>
        
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
  )
}

export default SlideSection

