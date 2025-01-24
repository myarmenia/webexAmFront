import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import './MakingGamesCarousel.css'
import { gamesImg1, gamesImg2, gamesImg3, gamesImg4 } from "../../../images/images";
import { useTranslation } from "react-i18next";

const MakingGamesCarousel = () => {
    const { t, i18n } = useTranslation();
  return (
    <div className="making_games_carousel_container">
      <div className="text-content">
        <h2 style={{ fontFamily: "'Armenian', sans-serif" }}>{t('making_games_carousel.0')}</h2>
        <p style={{ fontFamily: "'Armenian', sans-serif" }}>
          {t('making_games_carousel.1')}
        </p>
      </div>
      <div className="games_page_carousel">
        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="games_page_swiper"
        >
          <SwiperSlide className="games_page_carousel_img_swiper">
            <img src={gamesImg1} alt="Game 1" className="games_page_carousel_img" />
          </SwiperSlide>
          <SwiperSlide className="games_page_carousel_img_swiper">
            <img src={gamesImg2} alt="Game 2" className="games_page_carousel_img"/>
          </SwiperSlide>
          <SwiperSlide className="games_page_carousel_img_swiper">
            <img src={gamesImg3} alt="Game 3" className="games_page_carousel_img" />
          </SwiperSlide>

          <SwiperSlide className="games_page_carousel_img_swiper">
            <img src={gamesImg4} alt="Game 3" className="games_page_carousel_img" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MakingGamesCarousel;
