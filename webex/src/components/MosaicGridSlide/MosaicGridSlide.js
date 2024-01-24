import React from 'react';
import { projectSectionData, responsive } from '../../data';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import './MosaicGridSlide.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectallProjects } from '../../store/slices/HomePageSlice/HomePageSlice';

function MosaicGridSlide() {

  const allProjects = useSelector(selectallProjects)

  const prod = projectSectionData.map(el => (
    <Link to={`/projects/${el._id}`} key={el._id}>
      <div className='mosaic-slide-grid-item'>
        <img src={el.img} alt="" />
        <div className='mosaic-slide-grid-item-text-div'>
          <p>{el.txt}</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <div className='slide-section'>
      <div className='slide-section-items'> 
        <Carousel
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          containerClass='carousel-container'
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px'
        >
          {prod}
        </Carousel>
      </div> 
    </div>
  );
}

export default MosaicGridSlide;
