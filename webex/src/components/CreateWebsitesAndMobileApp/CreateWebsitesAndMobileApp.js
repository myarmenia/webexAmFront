import React, { useState, useEffect } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './CreateWebsitesAndMobileApp.css';
import { createWebAndMobileApp_data } from '../../data';
import CreateItemWebsitesAndMobileApp from '../CreateItemWebsitesAndMobileApp/CreateItemWebsitesAndMobileApp';
import { useTranslation } from 'react-i18next';

function CreateWebsitesAndMobileApp() {
  const { t, i18n } = useTranslation();
  const [slide, setSlide] = useState(1);
  const [autoplay, setAutoplay] = useState(true);

  const handleChangeSlideItem = (e, item_id) => {
    setSlide(item_id);
    setAutoplay(false); // Stop autoplay when a button is clicked
  };

  useEffect(() => {
    let autoplaySlide;

    if (autoplay) {
      autoplaySlide = setTimeout(() => {
        setSlide((prevSlide) => (prevSlide % 5) + 1);
      }, 5000);
    }

    return () => clearTimeout(autoplaySlide); // Cleanup on component unmount or when autoplay is stopped

  }, [autoplay, slide]);

  const handleMouseEnter = () => {
    setAutoplay(false); // Pause autoplay when mouse enters the slideshow
  };

  const handleMouseLeave = () => {
    setAutoplay(true); // Resume autoplay when mouse leaves the slideshow
  };

  return (
    <div
      className='create-website-mobile-app'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SectionTitle title={t('createWebsitesAndMobileApp')} />

      <div className='create-website-mobile-app-block'>
        <div className='create-website-mobile-app-items'>
          {createWebAndMobileApp_data.map((el, index) => (
            <CreateItemWebsitesAndMobileApp
              key={el._id}
              id={el._id}
              txt={index}
              slide={slide}
            />
          ))}
        </div>
        <div className='slide-btns'>
          {[1, 2, 3, 4, 5, 6].map((buttonIndex) => (
            <button style={{borderBottom: slide == buttonIndex ? '1px solid white' : 'none'}}
              key={buttonIndex}
              onClick={(e) => handleChangeSlideItem(e, buttonIndex)}
            >
              {buttonIndex.toString().padStart(2, '0')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateWebsitesAndMobileApp;
