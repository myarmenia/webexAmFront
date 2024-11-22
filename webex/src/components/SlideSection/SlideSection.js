import React from 'react';
import "react-multi-carousel/lib/styles.css";
import './SlideSection.css';
import Carousel from 'react-multi-carousel';
import { useSelector } from 'react-redux';
import { selectProgramingLang } from '../../store/slices/HomePageSlice/HomePageSlice';
import { useTranslation } from 'react-i18next';
import SlideSectionItem from '../SlideSectionItem/SlideSectionItem';
import { programingLengImg, responsive } from '../../data';

function SlideSection({ data }) {
  const { t } = useTranslation();
  const programingLang = useSelector(selectProgramingLang);

  const generateSlides = (items) =>
    items.map((el) => (
      <SlideSectionItem
        key={el.id}
        id={el.id}
        title={el.name}
        txt={el.description}
        img={programingLengImg} 
        icon={el.logo}
      />
    ));

  const slideItems = data ? generateSlides(data) : generateSlides(programingLang);

  return (
    <div className="slide-section">
      {!data && (
        <>
          <h2>{t('slide_section.0', 'Default Title')}</h2>
          <p>{t('slide_section.1', 'Default description text')}</p>
        </>
      )}

      <div className="slide-section-items">
        <Carousel
          className="jj"
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {slideItems}
        </Carousel>
      </div>
    </div>
  );
}

export default SlideSection;
